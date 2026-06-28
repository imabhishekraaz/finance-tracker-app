import incomeModel from "../models/income.model.js";
import XLSX from "xlsx";
import dataFilter from "../utils/dataFilter.js";
// Add Income

export const addIncome = async (req, res) => {
    const userId = req.user._id;
    
    const { description, amount, category, date } = req.body;

    try {
        if(!description || !amount || !category || !date) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        };

        const newIncome = new incomeModel({
            description,
            amount,
            category,
            date,
            userId
        });
        // save the new income entry to the database
        await newIncome.save();

        res.status(201).json({
            success: true,
            message: "Income added successfully"
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Server error"
        });
    };
};

// Get All Incomes of a user

export const getIncomes = async (req, res) => {
    const userId = req.user._id;
    try {
        const incomes = await incomeModel.find({ userId }).sort({ date: -1 });
        res.status(200).json({
            success: true,
            incomes
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};

// Update Income
export const updateIncome = async (req, res) => {
    const userId = req.user._id;
    const incomeId = req.params.id;
    const { description, amount, } = req.body;
    try {
        const updatedIncome = await incomeModel.findOneAndUpdate(
            {_id : incomeId, userId},
            {description, amount},
            {new:true}
        );
        if(!updatedIncome){
            return res.status(404).json({
                success: false,
                message: "Income not found"
            });
        };
        res.status(200).json({
            success: true,
            message: "Income updated successfully",
            income: updatedIncome
        });

    } catch(error){
        console.error(error);
        res.status(500).json({  
            success: false,
            message: "Server error"
        });
    }
};

// Delete Income
export const deleteIncome = async (req, res) => {
    try {
        const income = await incomeModel.findByIdAndDelete({_id: req.params.id});
        if(!income){
            return res.status(404).json({
                success: false,
                message: "Income not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Income deleted successfully"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Server error"
        });
    };
}
// Download Income Data sheet
export const downloadIncomeData = async (req, res) => {
    const userId = req.user._id;
    try {
        const incomes = await incomeModel.find({ userId }).sort({ date: -1 });
        const plainIncomes = incomes.map(income => ({
            description: income.description,
            amount: income.amount,
            category: income.category,
            date: new Date(income.date).toLocaleDateString(), // Format date as YYYY-MM-DD
            type: income.type
        }));

        const workSheet = XLSX.utils.json_to_sheet(plainIncomes);
        const workBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workBook, workSheet, "Incomes");
        XLSX.writeFile(workBook, "incomes.xlsx");
        res.download('incomes.xlsx');

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};

// Income overview
export const getIncomeOverview = async (req, res) => {
    try {
        const userId = req.user._id;
        const { range = "monthly" } = req.query; // Default to monthly if no range is provided
        const { startDate, endDate } = dataFilter(range);

        const incomes = await incomeModel.find({
            userId,
            date: { $gte: startDate, $lte: endDate }
        }).sort({ date: -1 });

        const totalIncome = incomes.reduce((total, income) => total + income.amount, 0);
        
        const averageIncome = incomes.length > 0 ? totalIncome / incomes.length : 0;
        const numberOfTransactions = incomes.length;

        const recentTransactions = incomes.slice(0, 9);
        res.status(200).json({
            success: true,
            totalIncome,
            averageIncome,
            numberOfTransactions,
            recentTransactions,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
}