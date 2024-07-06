"use client";
import { useState, useEffect } from "react";

const BudgetInput = ({ setBudget }) => {
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const savedBudget = JSON.parse(localStorage.getItem("budget")) || 0;
    setAmount(savedBudget);
    setBudget(savedBudget);
  }, [setBudget]);

  const handleChange = (e) => {
    setAmount(e.target.value);
    setBudget(Number(e.target.value));
    localStorage.setItem("budget", JSON.stringify(Number(e.target.value)));
  };

  return (
    <div className="flex flex-col gap-8 text-4xl font-bold">
      <h2>Simplified Budget</h2>
      <div className="flex flex-col gap-2 relative">
        <label
          htmlFor="budget"
          className="absolute text-gray top-2 left-3 text-sm"
        >
          Budget Amount
        </label>
        <input
          type="number"
          value={amount}
          onChange={handleChange}
          id="budget"
          className="p-3 pt-8 rounded-xl text-lg bg-gray-input"
        ></input>
      </div>
    </div>
  );
};

export default BudgetInput;