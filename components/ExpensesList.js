"use client";
import { useRef } from "react";
import { Toast } from "primereact/toast";

const ExpensesList = ({ expenses, removeExpense }) => {
  const toast = useRef(null);

  const showToastDelete = (expense) => {
    toast.current.show({
      severity: "warn",
      detail: `${expense.name} is deleted`,
    });
  };

  const handleRemove = (index, expense) => {
    removeExpense(index);
    showToastDelete(expense);
  };

  return (
    <div className="text-white p-8 md:p-16 py-24">
      <h3 className="text-xl text-green font-semibold">Expenses</h3>
      {expenses.length === 0 ? (
        <p className="pt-10">Please add some expenses.</p>
      ) : (
        <ul className="py-6">
          {expenses.map((expense, index) => (
            <li key={index} className="flex border-b-2 border-gray/50 pb-2 p-2">
              <p className="basis-2/4">{expense.name}</p>
              <p className="basis-1/4 text-end">{expense.amount}</p>
              <button
                onClick={() => handleRemove(index, expense)}
                className="basis-1/4 text-end"
              >
                <i className="pi pi-trash"></i>
              </button>
            </li>
          ))}
        </ul>
      )}
      <Toast ref={toast} />
    </div>
  );
};

export default ExpensesList;
