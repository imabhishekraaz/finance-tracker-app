import incomeModel from "../models/income.model.js"; // Fixed import typo
import expenseModel from "../models/expense.model.js";

export const getDashboardData = async (req, res) => {
    const userId = req.user._id;
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

    try {
        // Query database
        const incomes = await incomeModel.find({ userId }).lean();

        const expenses = await expenseModel.find({ userId }).lean();

        // Calculate Totals
        const monthlyIncome = incomes.reduce((acc, cur) => acc + Number(cur.amount || 0), 0);
        const monthlyExpense = expenses.reduce((acc, cur) => acc + Number(cur.amount || 0), 0);
        const savings = monthlyIncome - monthlyExpense;
        const savingsRate = monthlyIncome === 0 ? 0 : Math.round((savings / monthlyIncome) * 100);

        // Map and Sanitize Transaction Lists (Removing DB noise)
        const sanitizedIncomes = incomes.map(({ _id, title, amount, date, category }) => ({
            _id, title, amount, date, category: category || "Income", type: "income"
        }));

        const sanitizedExpenses = expenses.map(({ _id, title, amount, date, category }) => ({
            _id, title, amount, date, category: category || "Other", type: "expense"
        }));

        // Merge and Sort by 'date' field directly instead of 'createdAt'
        const recentTransactions = [...sanitizedIncomes, ...sanitizedExpenses]
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 10); // Optional: Limit to top 10 recent transactions for dashboard efficiency

        // Calculate Category Breakdown
        const spendByCategory = {};
        for (const exp of expenses) {
            const cat = exp.category || "Other";
            spendByCategory[cat] = (spendByCategory[cat] || 0) + Number(exp.amount || 0);
        }

        const expenseDistribution = Object.entries(spendByCategory).map(([category, amount]) => ({
            category,
            amount,
            percent: monthlyExpense === 0 ? 0 : Math.round((amount / monthlyExpense) * 100),
        }));

        return res.status(200).json({
            success: true,
            data: {
                monthlyIncome,
                monthlyExpense,
                savings,
                savingsRate,
                recentTransactions,
                spendByCategory,
                expenseDistribution
            }
        });
    } catch (error) {
        console.error("Dashboard Data Error:", error.message);
        return res.status(500).json({
            success: false,
            message: "Internal server error" // Hide raw system errors from client in production
        });
    }
};