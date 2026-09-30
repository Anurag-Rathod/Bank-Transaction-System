# 🏦 Banking Transaction Backend

A backend application for managing users, bank accounts, and secure money transfers using **Node.js, Express.js, MongoDB, and Mongoose**.

This project focuses on real-world backend concepts such as **JWT authentication, bcrypt password hashing, ledger-based balance management, MongoDB transactions, idempotency, and email notifications**.

## 🚀 Features

- 👤 **User Authentication** — Supports user registration, login, and logout using JWT-based authentication.
- 🔐 **Secure Password Storage** — Hashes passwords using `bcrypt` before storing them in MongoDB.
- 🏦 **Account Management** — Supports bank account creation, account status validation, and account management.
- 💰 **Ledger-Based Accounting** — Tracks debit and credit entries through a transaction ledger instead of directly modifying balances.
- 📊 **Balance Calculation** — Calculates account balances using MongoDB aggregation pipelines.
- 💸 **Secure Money Transfers** — Supports transfers between accounts with sender balance and account status validation.
- 🔄 **MongoDB Transactions** — Uses database transactions to ensure atomic and consistent money transfers.
- ♻️ **Idempotent Transactions** — Uses unique idempotency keys to prevent duplicate money transfers during request retries.
- 🚫 **JWT Token Blacklisting** — Invalidates tokens during logout to prevent further unauthorized access.
- 🛡️ **Authorization & Validation** — Protects sensitive operations through authentication, authorization, and account validation.
- 📧 **Email Notifications** — Sends registration and transaction-related notifications using Nodemailer and Gmail OAuth2.
- 🧑‍💻 **API Testing** — APIs can be tested using Postman.

---

## 🛠️ Tech Stack

**Backend:** Node.js, Express.js  
**Database:** MongoDB, Mongoose  
**Authentication:** JWT, bcrypt  
**Email:** Nodemailer, Gmail OAuth2  
**API Testing:** Postman  
**Tools:** Git, GitHub, VS Code

---

## 🏗️ Backend Architecture

    Client / Postman
           │
           ▼
    Express.js Server
           │
           ▼
         Routes
           │
           ▼
    Authentication Middleware
           │
           ▼
       Controllers
           │
           ▼
      Service / Logic
           │
           ▼
     Mongoose Models
           │
           ▼
        MongoDB
           │
           └──────────────► Email Service
                            (Nodemailer)

---

## 💸 Transaction Flow

    Transfer Request
           │
           ▼
    Validate Request
           │
           ▼
    Check Idempotency Key
           │
           ▼
    Validate Sender & Receiver
           │
           ▼
    Check Account Status
           │
           ▼
    Check Sender Balance
           │
           ▼
    Create Transaction
        (PENDING)
           │
           ▼
    Create DEBIT Ledger Entry
           │
           ▼
    Create CREDIT Ledger Entry
           │
           ▼
    Mark Transaction
      COMPLETED
           │
           ▼
    Commit MongoDB Transaction
           │
           ▼
    Send Email Notification

---

## 📒 Ledger-Based Accounting

The application follows a **ledger-based accounting model** instead of directly storing and updating the account balance.

For every successful transfer, corresponding debit and credit entries are recorded:

    Sender Account
          │
          └── DEBIT  ₹500

    Receiver Account
          │
          └── CREDIT ₹500

The account balance is calculated using:

    Balance = Total Credits - Total Debits

MongoDB aggregation pipelines are used to calculate the total debit and credit amounts from ledger entries.

This approach provides a clear transaction history and helps maintain a reliable record of account activity.

---

## 🔄 Idempotency

Money transfer requests require a unique `idempotencyKey`.

The idempotency mechanism ensures that retrying the same request does not create duplicate transactions.

    First Request
          │
          ▼
    Idempotency Key Stored
          │
          ▼
    Transaction Processed
          │
          ▼
    Transaction Completed


    Retry with Same Key
          │
          ▼
    Existing Transaction Found
          │
          ▼
    Duplicate Transaction Prevented

This is especially useful when a client retries a request because of a network timeout or temporary connection failure.

---

## 📌 Key Backend Concepts

- RESTful API Design
- JWT Authentication & Authorization
- Password Hashing with bcrypt
- MongoDB Transactions
- MongoDB Aggregation Pipeline
- Idempotent API Design
- Ledger-Based Accounting
- Database Indexing
- JWT Token Blacklisting
- Middleware-based Authentication
- Transaction Error Handling
- Email Integration
