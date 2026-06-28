import expenseModel from "../models/expense.model.js";
import getDateRange from "../utils/dataFilter.js";
import XLSX from "xlsx";

// Add Expense
export const addExpense = async (req, res) => {
  const userId = req.user._id;
  const { description, amount, category, date } = req.body;

  try {
    if(!description || !amount || !category || !date) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const newExpense = new expenseModel({
      description,
      amount,
      category,
      date: new Date(date),
      userId
    });

    await newExpense.save();

    res.status(201).json({
      success: true,
      message: "Expense added successfully"
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};

// To get all expenses of a user
export const getExpenses = async (req, res) => {
  const userId = req.user._id;
  try {
    const expenses = await expenseModel.find({
      userId}).sort({ date: -1 });

    res.status(200).json({
      success: true,
      data: expenses
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};

// Update Expense
export const updateExpense = async (req, res) => {
  const userId = req.user._id;
  const expenseId = req.params.id;
  const { description, amount, category, date } = req.body;     

  try {
    const updatedExpense = await expenseModel.findOneAndUpdate(
      { _id: expenseId, userId },
      { description, amount },
      { new: true }
    );
    if (!updatedExpense) {
      return res.status(404).json({
        success: false,
        message: "Expense not found"
      });
    }
    res.status(200).json({
      success: true,
      message: "Expense updated successfully",
      data: updatedExpense
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};
// delete Expense
export const deleteExpense = async (req, res) => {
  
    try {
        const expense = await expenseModel.findByIdAndDelete({_id:req.params.id});
        if(!expense){
            return res.status(404).json({
                success: false,
                message: "Expense not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Expense deleted successfully"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// download expenses
export const downloadExpenses = async (req, res) => {
  const userId = req.user._id;
  try {
    const expenses = await expenseModel.find({ userId }).sort({ date: -1 });
    const plainText = expenses.map(expense => ({
        description: expense.description,
        amount: expense.amount,
        category: expense.category,
        date: expense.date.toLocaleDateString(),
    }));
    const workSheet = XLSX.utils.json_to_sheet(plainText);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, "ExpensesModel");
    XLSX.writeFile(workBook, "Expenses.xlsx");
    res.download("expenses.xlsx");

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Overview of expenses
export const getExpenseOverview = async (req, res) => {
  try {
    const userId = req.user._id;
    const { range = "monthly" } = req.query;
    const { startDate, endDate } = getDateRange(range);

    const expenses = await expenseModel.find({
      userId,
      date: { $gte: startDate, $lte: endDate }
    }).sort({ date: -1 });

    const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
    const averageExpense = expenses.length > 0 ? totalExpenses / expenses.length : 0;
    const numberOfTransactions = expenses.length;
    const recentTransactions = expenses.slice(0, 5);
    
    res.status(200).json({
      success: true,
      data: {
        totalExpenses,
        averageExpense,
        numberOfTransactions,
        recentTransactions,
        range
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};