import express from "express";
import authMiddleware from "../middleware/auth.js";
import { addIncome, getIncomes, updateIncome, deleteIncome, downloadIncomeData , getIncomeOverview } from "../controllers/income.controller.js";

const incomeRouter = express.Router();

incomeRouter.post('/add', authMiddleware, addIncome);
incomeRouter.get('/get', authMiddleware, getIncomes);

incomeRouter.put('/update/:id', authMiddleware, updateIncome);
incomeRouter.get('/downloadexcel', authMiddleware, downloadIncomeData);

incomeRouter.delete('/delete/:id', authMiddleware, deleteIncome);
incomeRouter.get('/overview', authMiddleware, getIncomeOverview);

export default incomeRouter;