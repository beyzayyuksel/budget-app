import React from "react";

const BudgetSummary = ({ budget, expenses }) => {
  const totalExpenses = expenses.reduce((acc, curr) => acc + curr.amount, 0);
  const balance = budget - totalExpenses;
  return (
    <div className="flex justify-between px-16 py-6">
      <div className="flex flex-col gap-2">
        <p className="text-sm font-bold text-gray-dark">Income</p>
        <p className="text-3xl font-bold">{budget}</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-bold text-gray-dark">Expenses</p>
        <p className="text-3xl font-bold">{totalExpenses}</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-bold text-gray-dark">Balance</p>
        <p
          className={`text-3xl font-bold ${
            balance > 0 ? "text-green" : "text-red"
          }`}
        >
          {balance}
        </p>
      </div>
    </div>
  );
};

export default BudgetSummary;
