# 🏦 Banking Transaction & Ledger Backend

A backend banking application built with **Node.js, Express.js, MongoDB, and Mongoose**. The application implements secure authentication, account management, ledger-based accounting, idempotent money transfers, and transactional data consistency.

## ✨ Features

* 🔐 **JWT Authentication** — Implements user registration, login, logout, and protected API access using JSON Web Tokens.
* 🔒 **Password Security** — Passwords are securely hashed using `bcryptjs` before being stored.
* 🏦 **Account Management** — Supports account creation, account retrieval, and account status management.
* 💰 **Ledger-Based Accounting** — Records every money movement as `DEBIT` and `CREDIT` ledger entries.
* 💸 **Money Transfer** — Supports secure transfers between accounts.
* 🔄 **Idempotent Transactions** — Uses unique idempotency keys to prevent duplicate money transfers.
* ⚛️ **Atomic Transactions** — Uses MongoDB transactions to maintain consistency across transaction and ledger operations.
* 📊 **Balance Calculation** — Calculates account balances using MongoDB aggregation pipelines.
* 🧾 **Transaction Status** — Supports `PENDING`, `COMPLETED`, `FAILED`, and `REVERSED` transaction states.
* 🛡️ **Account Status** — Supports `ACTIVE`, `FROZEN`, and `CLOSED` account states.
* 🚪 **JWT Blacklisting** — Invalidates logged-out JWT tokens using a blacklist collection.
* ⏳ **TTL Cleanup** — Automatically removes expired blacklisted tokens using MongoDB TTL indexes.
* 📧 **Email Notifications** — Sends transaction-related emails using Nodemailer.
* 👤 **System User Flow** — Supports initial account funding through a system user.

---

## 🛠️ Tech Stack

### Backend

* **Node.js**
* **Express.js**
* **REST APIs**
* **Mongoose**
* **MongoDB**
* **JWT**
* **bcryptjs**
* **Cookie Parser**
* **dotenv**

### Database & Transactions

* **MongoDB Transactions**
* **MongoDB Aggregation**
* **MongoDB Indexing**
* **MongoDB TTL Indexes**

### Email

* **Nodemailer**
* **Gmail OAuth2**

### Development & Testing

* **Postman**
* **Git & GitHub**
* **VS Code**
* **Nodemon**

---

## 🏗️ Application Architecture

```text
                         ┌───────────────────┐
                         │       Client      │
                         │     / Postman     │
                         └─────────┬─────────┘
                                   │
                              HTTP / REST
                                   │
                                   ▼
                         ┌───────────────────┐
                         │  Express Server   │
                         │      app.js       │
                         └─────────┬─────────┘
                                   │
                                   ▼
                         ┌───────────────────┐
                         │      Routes       │
                         └─────────┬─────────┘
                                   │
                                   ▼
                         ┌───────────────────┐
                         │ Auth Middleware   │
                         └─────────┬─────────┘
                                   │
                                   ▼
                         ┌───────────────────┐
                         │    Controllers    │
                         │                   │
                         │ Auth / Account /  │
                         │    Transaction    │
                         └─────────┬─────────┘
                                   │
                                   ▼
                         ┌───────────────────┐
                         │ Mongoose Models   │
                         └─────────┬─────────┘
                                   │
                                   ▼
                         ┌───────────────────┐
                         │      MongoDB      │
                         │                   │
                         │ Users / Accounts  │
                         │ Transactions /    │
                         │ Ledgers / Tokens  │
                         └───────────────────┘
                                   │
                                   ▼
                         ┌───────────────────┐
                         │  Email Service    │
                         │    Nodemailer     │
                         └───────────────────┘
