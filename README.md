# Wallet Page Implementation

[Watch the video](https://youtu.be/2OU1NGTsE3s)

## **Description**

This project is a simple wallet management page built using React. The main functionality includes displaying the user's balance, showing transaction history, and allowing the user to add or withdraw money. The project uses Axios for making API requests to interact with a backend service that handles the wallet's balance and transaction data.

### **Features**
- **Display User's Balance**: Shows the current balance with the ability to update when money is added or withdrawn.
- **Transaction History**: Displays a list of transactions that includes credits and debits, each with a timestamp, transaction type, and associated details.
- **Add and Withdraw Money**: Users can add money to the wallet or withdraw money through buttons that interact with the backend.

## **Technologies Used**
- **React**: For the frontend UI and state management.
- **Axios**: For making HTTP requests to fetch balance, transaction history, and perform transactions.
- **Tailwind CSS**: For styling the page.

## **API Endpoints**
- `GET /api/wallet/balance`: Fetch the user's current balance.
- `GET /api/wallet/transactions`: Fetch the user's transaction history.
- `POST /api/wallet/add-money`: Add money to the wallet.
- `POST /api/wallet/withdraw-money`: Withdraw money from the wallet.

## **How to Run**

### **1. Clone the repository**
```bash
git clone https://github.com/laatu08/horizon-labs.git
```

### **2. Frontend
```bash
npm install
npm run dev
```

### **3. Backend
```bash
cd backend
npm install
npx nodemon index.js
```
