"use client";
import { useState, useRef } from "react";
import { Toast } from "primereact/toast";

const ExpensesForm = ({ addExpense, expenses }) => {
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const toast = useRef(null);

  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      detail: `${expenseName} is added`,
    });
  };

  const handleSubmit = () => {
    if (!expenseName || !amount || !date) {
      toast.current.show({
        severity: "error",
        detail: "All fields are required",
      });
      return;
    }
    addExpense({
      id: expenses.length + 1,
      name: expenseName,
      amount: Number(amount),
      date: date,
    });
    setExpenseName("");
    setAmount("");
    setDate("");
    showSuccess();
  };

  return (
    <div className="flex flex-wrap gap-6">
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
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
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
