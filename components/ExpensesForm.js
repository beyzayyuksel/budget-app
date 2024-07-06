"use client";
import { useState, useRef } from "react";
import { Toast } from "primereact/toast";

const ExpensesForm = ({ addExpense, expenses }) => {
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(null);

  const toast = useRef(null);

  const show = () => {
    toast.current.show({
      severity: "success",
      detail: `${expense} is added`,
    });
  };

  const handleSubmit = () => {
    addExpense({
      id: expenses.length + 1,
      name: expense,
      amount: Number(amount),
      date: date,
    });
    setExpense("");
    setAmount("");
    setDate(null);
    show();
  };

  return (
    <div className="flex gap-6">
      <div className="flex flex-col gap-2 relative">
        <label
          htmlFor="budget"
          className="absolute text-gray top-2 left-3 text-sm"
        >
          Expense
        </label>
        <input
          type="text"
          id="budget"
          value={expense}
          onChange={(e) => setExpense(e.target.value)}
          className="p-3 pt-8 rounded-xl text-lg bg-gray-input max-w-40"
        ></input>
      </div>
      <div className="flex flex-col gap-2 relative">
        <label
          htmlFor="budget"
          className="absolute text-gray top-2 left-3 text-sm "
        >
          Amount
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          id="budget"
          className="p-3 pt-8 rounded-xl text-lg bg-gray-input max-w-40"
        ></input>
      </div>
      <div className="flex flex-col gap-2 relative">
        <label
          htmlFor="budget"
          className="absolute text-gray top-2 left-3 text-sm"
        >
          Date
        </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          id="budget"
          className="p-3 pt-8 rounded-xl text-lg bg-gray-input max-w-40"
        ></input>
      </div>
      <div className="flex justify-center">
        <button onClick={handleSubmit}>
          <i className="pi pi-plus text-green text-xl font-black"></i>
        </button>
      </div>
      <Toast ref={toast} />
    </div>
  );
};

export default ExpensesForm;
