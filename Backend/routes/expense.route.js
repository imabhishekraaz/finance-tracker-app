import express from "express";
import authMiddleware from "../middleware/auth.js";
import { addExpense, getExpenses, updateExpense, deleteExpense, downloadExpenses, getExpenseOverview } from "../controllers/expense.controller.js";

const expenseRouter = express.Router();

expenseRouter.post("/add", authMiddleware, addExpense);

expenseRouter.get("/get", authMiddleware, getExpenses);
expenseRouter.get("/overview", authMiddleware, getExpenseOverview);
expenseRouter.get("/downloadexcel", authMiddleware, downloadExpenses);

expenseRouter.put("/update/:id", authMiddleware, updateExpense);
expenseRouter.delete("/delete/:id", authMiddleware, deleteExpense);


export default expenseRouter;