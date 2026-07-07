import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectDB } from './config/bd.js';
import userRouter from './routes/user.route.js';
import incomeRouter from './routes/income.route.js';
import expenseRouter from './routes/expense.route.js';
import dashBoardRouter from './routes/dashboard.route.js';


import dns from 'node:dns';

// Force Node.js to use Google (8.8.8.8) and Cloudflare (1.1.1.1) DNS servers
dns.setServers(['8.8.8.8', '1.1.1.1']);

const app = express()
const port = 4000;

// middleware
app.use(cors({
  origin:'https://frontend-7ovc.onrender.com'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database 
connectDB();

// Routes
app.use('/api/user', userRouter);
app.use('/api/income', incomeRouter);
app.use('/api/expense', expenseRouter);
app.use('/api/dashboard', dashBoardRouter)

app.get('/', (req,res)=>{
  res.send("API Working");
});

app.listen(port, ()=>{
  console.log('server is running');
});
