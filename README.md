# 🏦 Banking Transaction Backend

A backend application for managing users, bank accounts, and secure money transfers using **Node.js, Express.js, MongoDB, and Mongoose**.

This project focuses on real-world backend concepts such as **JWT authentication, bcrypt password hashing, ledger-based balance management, MongoDB transactions, idempotency, and email notifications**.

## 🚀 Features

- User registration, login, and logout
- JWT-based authentication and authorization
- Password hashing using bcrypt
- Account creation and management
- Account balance calculation using MongoDB Aggregation
- Ledger-based debit and credit tracking
- Secure money transfers between accounts
- MongoDB transactions for atomic operations
- Idempotency to prevent duplicate transactions
- JWT token blacklisting on logout
- Account status validation
- System-user authorization for initial funds
- Transaction and registration email notifications

## 🏗️ Architecture

```text
Client / Postman
       ↓
Express.js Server
       ↓
Routes
       ↓
Authentication Middleware
       ↓
Controllers
       ↓
Mongoose Models
       ↓
MongoDB
       ↓
Email Service
```

## 💸 Transaction Flow

```text
Validate Request
       ↓
Idempotency Check
       ↓
Validate Accounts
       ↓
Check Sender Balance
       ↓
Create Transaction (PENDING)
       ↓
Create DEBIT Ledger Entry
       ↓
Create CREDIT Ledger Entry
       ↓
Mark Transaction COMPLETED
       ↓
Commit MongoDB Transaction
       ↓
Send Email Notification
```

## 📒 Ledger-Based Balance

The application uses a **ledger-based approach** instead of directly maintaining the account balance.

For every transfer:

```text
Sender Account   → DEBIT  ₹500
Receiver Account → CREDIT ₹500
```

The account balance is calculated as:

```text
Balance = Total Credits - Total Debits
```

MongoDB Aggregation is used to calculate the total debit and credit amounts from the ledger entries.

## 🔄 Idempotency

Each transfer request contains a unique `idempotencyKey`.

If a request is retried because of a network failure, the same idempotency key prevents the transaction from being processed twice.

```text
First Request
     ↓
Transaction Created

Retry with Same Key
     ↓
Duplicate Transaction Prevented
```

## 🛠️ Tech Stack

**Backend:** Node.js, Express.js  
**Database:** MongoDB, Mongoose  
**Authentication:** JWT, bcrypt  
**Email:** Nodemailer, Gmail OAuth2  
**API Testing:** Postman  
**Tools:** Git, GitHub, VS Code


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

## 🚀 Future Improvements

- Transaction history with pagination
- Complete transaction reversal workflow
- Stronger account ownership validation
- Improved concurrency handling
- Centralized error handling
- Background job processing for emails
- Rate limiting
- Automated unit and integration testing
