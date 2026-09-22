import express from "express";
const transactionRoutes  = express.Router();
import {authMiddleware, authSystemUserMiddleware, } from "../middleware/auth.middleware.js"
import { createInitialFundsTransaction, createTransaction } from "../controllers/transaction.controller.js";

/**
 * - POST /api/transactions/
 * - Create a new transaction
 */
transactionRoutes.post("/", authMiddleware, createTransaction)

/**
 * - POST /api/transactions/system/initial-funds
 * - Create initial funds transaction from system user
 */
transactionRoutes.post("/system/initial-funds", authSystemUserMiddleware, createInitialFundsTransaction)

export default transactionRoutes;