"use client";
import BudgetInput from "@/components/BudgetInput";
import BudgetSummary from "@/components/BudgetSummary";
import ExpensesForm from "@/components/ExpensesForm";
import ExpensesList from "@/components/ExpensesList";
import { useState, useEffect } from "react";

export default function Home() {
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    setExpenses(savedExpenses);
  }, []);

  useEffect(() => {
    const savedBudget = JSON.parse(localStorage.getItem("budget"));
    setBudget(savedBudget);
  }, []);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
    localStorage.setItem("expenses", JSON.stringify([...expenses, expense]));
  };

  const removeExpense = (index) => {
    const newExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(newExpenses);
    localStorage.setItem("expenses", JSON.stringify(newExpenses));
  };

  {
    console.log(expenses);
  }
  return (
    <div className="flex flex-col flex-auto">
      <div className="flex flex-auto">
        <div className="bg-gray-dark flex-1">
          <div className="flex flex-col gap-20 p-16 text-white">
            <BudgetInput setBudget={setBudget} />
            <ExpensesForm addExpense={addExpense} expenses={expenses} />
          </div>
        </div>
        <div className="flex-1 bg-black">
          <ExpensesList expenses={expenses} removeExpense={removeExpense} />
        </div>
      </div>

      <BudgetSummary budget={budget} expenses={expenses} />
    </div>
  );
}
