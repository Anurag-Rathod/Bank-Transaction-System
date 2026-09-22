import express from "express"
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());

/**
 * - Importing Routers
 */
import authRouter from "./routes/auth.routes.js";
import accountRouter from "./routes/account.routes.js"
import transactionRoutes from "./routes/transaction.routes.js";

/**
 * - Use Routers
 */
app.use("/api/auth", authRouter);
app.use("/api/accounts",accountRouter);
app.use("/api/transactions", transactionRoutes);
console.log("1");

export default app;

//grddCft976cTjGjZ
//anuragrathod999_db_user
//mongodb+srv://<db_username>:grddCft976cTjGjZ@cluster0.jpnmvnj.mongodb.net/