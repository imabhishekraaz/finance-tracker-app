import express from "express";

import { getDashboardData } from "../controllers/dashboard.controller.js";
import authMiddleware from "../middleware/auth.js";

const dashBoardRouter = express.Router();

dashBoardRouter.get('/',authMiddleware,getDashboardData);

export default dashBoardRouter;
