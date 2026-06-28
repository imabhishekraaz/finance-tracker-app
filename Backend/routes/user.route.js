import express from "express";
import { changeUserPassword, updateUserDetails, getUserDetails, loginUser, registerUser } from "../controllers/user.controller.js";
import authMiddleware from "../middleware/auth.js";
import incomeModel from "../models/income.model.js";

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);

// Protected Routes
userRouter.get('/me', authMiddleware, getUserDetails);
userRouter.put('/profile', authMiddleware, updateUserDetails);
userRouter.put('/password', authMiddleware, changeUserPassword);


export default userRouter;