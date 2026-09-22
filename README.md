# 🏦 Banking Transaction & Ledger Backend

A secure and scalable **banking backend system** built with **Node.js, Express.js, and MongoDB**. The application implements **JWT authentication, account management, ledger-based accounting, idempotent money transfers, MongoDB transactions, balance aggregation, and email notifications**.

The core of the system is a **ledger-based architecture**, where every money transfer creates immutable `DEBIT` and `CREDIT` ledger entries. Account balances are calculated from ledger records using MongoDB aggregation.

---

## ✨ Features

- 🔐 **JWT Authentication** — Secure user authentication using JSON Web Tokens.
- 🔑 **Password Security** — Passwords are securely hashed using `bcryptjs`.
- 👤 **User & Account Management** — Create and manage user accounts.
- 💰 **Ledger-Based Accounting** — Every transfer creates corresponding `DEBIT` and `CREDIT` ledger entries.
- 💸 **Money Transfer** — Transfer funds securely between accounts.
- ♻️ **Idempotent Transactions** — Prevents duplicate transactions using unique idempotency keys.
- 🔄 **Transaction States** — Supports `PENDING`, `COMPLETED`, `FAILED`, and `REVERSED` states.
- 🛡️ **MongoDB Transactions** — Ensures transaction and ledger updates are atomic.
- 📊 **Balance Aggregation** — Calculates account balance using MongoDB aggregation pipelines.
- 🚦 **Account Status Management** — Supports `ACTIVE`, `FROZEN`, and `CLOSED` account states.
- 📧 **Email Notifications** — Sends transaction-related emails using Nodemailer and Gmail OAuth2.
- 🚫 **JWT Blacklisting** — Invalidates logged-out JWT tokens.
- ⏳ **TTL Index** — Automatically removes expired blacklisted tokens.
- 🏦 **System User Flow** — Supports initial funds through a dedicated system-user transaction flow.
- 🔒 **Protected APIs** — Authentication middleware protects account and transaction operations.

---

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js
- JavaScript
- REST APIs

### Database
- MongoDB
- Mongoose
- MongoDB Aggregation
- MongoDB Transactions

### Authentication & Security
- JWT
- bcryptjs
- Cookie Parser
- JWT Blacklisting
- MongoDB TTL Index

### Email & Services
- Nodemailer
- Gmail OAuth2

### Development & Testing
- Postman
- Git
- GitHub
- VS Code

---

## 🏗️ Application Architecture

```text
                    ┌─────────────────────┐
                    │   Client / Postman  │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   Express Server    │
                    │      app.js         │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │       Routes        │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │  Auth Middleware    │
                    │   JWT Validation    │
                    └──────────┬──────────┘
                               │
                               ▼
              ┌────────────────────────────────┐
              │          Controllers            │
              │                                │
              │ Account / Auth / Transaction   │
              └───────────────┬────────────────┘
                              │
                ┌─────────────┴─────────────┐
                ▼                           ▼
       ┌─────────────────┐        ┌─────────────────┐
       │ Mongoose Models │        │  Email Service  │
       └────────┬────────┘        └─────────────────┘
                │
                ▼
       ┌─────────────────────┐
       │     MongoDB Atlas   │
       │                     │
       │ Users               │
       │ Accounts            │
       │ Transactions        │
       │ Ledgers             │
       │ Token Blacklist     │
       └─────────────────────┘
