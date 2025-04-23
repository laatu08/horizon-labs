import React, { useState } from "react";

const transactionsData = [
  {
    date: "Oct 26, 2022",
    transactions: [
      {
        name: "Adam Costa",
        bank: "Standard Chartered Bank",
        time: "5:02 PM",
        amount: 200,
        type: "credit",
      },
      {
        name: "Sarah Eric",
        bank: "Payment Received",
        time: "3:22 PM",
        amount: 200,
        type: "debit",
      },
    ],
  },
  {
    date: "Oct 25, 2022",
    transactions: [
      {
        name: "Millie Bobby",
        bank: "Payment Received",
        time: "3:22 PM",
        amount: 200,
        type: "debit",
      },
      {
        name: "William Edward",
        bank: "Payment Received",
        time: "3:22 PM",
        amount: 200,
        type: "debit",
      },
      {
        name: "Adam Costa",
        bank: "Standard Chartered Bank",
        time: "5:02 PM",
        amount: 200,
        type: "credit",
      },
    ],
  },
];

export default function WalletPage() {
  const [balance, setBalance] = useState(1340.56);

  const addMoney = () => {
    setBalance((prev) => prev + 100);
  };

  const withdrawMoney = () => {
    if (balance >= 100) {
      setBalance((prev) => prev - 100);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-indigo-600 text-white rounded-b-3xl px-6 py-8 relative">
        <div className="flex gap-5">
          <img
            src="src\assets\arrow_back_128dp_E8EAED_FILL0_wght400_GRAD0_opsz48.svg"
            alt=""
            width="30"
          />
          <h2 className="text-4xl font-medium">Wallet</h2>
        </div>

        <div className="flex flex-col items-center">
          <p className="mt-4 text-lg">Your Earnings</p>
          <h1 className="text-4xl font-bold mt-1">${balance.toFixed(2)}</h1>
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              className="bg-white  flex justify-center items-center gap-3 text-black px-4 py-2 rounded-lg font-semibold"
              onClick={addMoney}
            >
              <img
                src="src\assets\add_128dp_E8EAED_FILL0_wght400_GRAD0_opsz48.svg"
                className="invert"
                width="20"
                alt=""
              />
              Add Money
            </button>
            <button
              className="bg-white flex justify-center items-center gap-3 text-black px-4 py-2 rounded-lg font-semibold"
              onClick={withdrawMoney}
            >
              <img
                src="src\assets\output_128dp_E8EAED_FILL0_wght400_GRAD0_opsz48.svg"
                className="invert"
                width="20"
                alt=""
              />
              Withdraw
            </button>
          </div>
        </div>
      </div>

      <div className="px-6 py-4">
        {transactionsData.map((section, index) => (
          <div key={index} className="mb-4">
            <div className="flex items-center justify-center">
              <p className="text-gray-500 font-bold text-sm mb-2">
                {section.date}
              </p>
            </div>

            {section.transactions.map((tx, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between bg-gray-50 p-4 mb-2 rounded-lg shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`p-2 rounded-full ${
                      tx.type === "credit" ? "bg-green-100" : "bg-yellow-100"
                    }`}
                  >
                    <span className="text-2xl">
                      {tx.type === "credit" ? "⬆️" : "⬇️"}
                    </span>
                  </div>
                  <div>
                    <p className="text-gray-800 font-semibold">{tx.name}</p>
                    <p className="text-gray-500 text-xs">{tx.bank}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-500 text-sm">{tx.time}</p>
                  <p
                    className={`${
                      tx.type === "credit"
                        ? "text-green-500"
                        : "text-yellow-500"
                    } font-semibold`}
                  >
                    ${tx.amount}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="w-full px-6 pb-6">
        <button className="relative w-full bg-indigo-600 text-white py-3 px-4 rounded-full font-semibold text-lg shadow-md flex justify-center items-center">
          <span>Continue</span>
          <img
            src="src/assets/arrow_forward_128dp_E8EAED_FILL0_wght400_GRAD0_opsz48.svg"
            className="absolute right-7"
            width="20"
            alt="arrow"
          />
        </button>
      </div>
    </div>
  );
}
