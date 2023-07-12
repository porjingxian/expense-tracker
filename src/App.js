import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: '1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2023, 7, 14),
  },
  { 
    id: '2', 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2023, 4, 12), 
  },
  {
    id: '3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2022, 3, 28),
  },
  {
    id: '4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  };

  return (
    <div>
      <NewExpense id={+expenses[expenses.length - 1].id + 1} onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
