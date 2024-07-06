"use client";
import { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export default function AllExpenses() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    setExpenses(savedExpenses);
  }, []);
  return (
    <div className="flex-auto bg-black text-white flex justify-center items-center">
      <div className="max-w-5xl">
        <DataTable value={expenses} tableStyle={{ minWidth: "50rem" }}>
          <Column
            field="id"
            header="id"
            sortable
            style={{ width: "25%" }}
          ></Column>
          <Column
            field="name"
            header="Name"
            sortable
            style={{ width: "25%" }}
          ></Column>
          <Column
            field="amount"
            header="amount"
            sortable
            style={{ width: "25%" }}
          ></Column>
          <Column
            field="date"
            header="date    "
            sortable
            style={{ width: "25%" }}
          ></Column>
        </DataTable>
      </div>
    </div>
  );
}
