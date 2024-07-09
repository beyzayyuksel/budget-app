"use client";
import { useEffect, useState } from "react";
import { Chart } from "react-chartjs-2";
import { registerables, Chart as ChartJS } from "chart.js";
import "chartjs-adapter-date-fns";
import BudgetSummary from "@/components/BudgetSummary";

ChartJS.register(...registerables);

export default function Statistic() {
  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState(0);

  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    setExpenses(storedExpenses);
    const savedBudget = JSON.parse(localStorage.getItem("budget"));
    setBudget(savedBudget);
  }, []);

  const data = {
    labels: expenses.map((expense) => expense.date),
    datasets: [
      {
        label: "Expenses Over Time",
        data: expenses.map((expense) => ({
          x: new Date(expense.date),
          y: expense.amount,
        })),
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "time",
        time: {
          unit: "month",
          displayFormats: {
            month: "MMM yyyy",
          },
          tooltipFormat: "MMM yyyy",
        },
        title: {
          display: false,
          text: "Date",
        },
      },
      y: {
        title: {
          display: false,
          text: "Amount",
        },
      },
    },
  };

  return (
    <div className="flex-auto flex flex-col">
      <div className="bg-black pt-16 flex-auto">
        <div className="bg-white shadow-lg md:mx-24">
          <Chart
            className="min-h-56 max-h-128 items-center"
            type="line"
            data={data}
            options={options}
          />
        </div>
      </div>
      <BudgetSummary budget={budget} expenses={expenses} />
    </div>
  );
}
