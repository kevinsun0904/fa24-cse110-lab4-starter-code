import { useContext } from "react";
import { Expense } from "../../types/types";
import { AppContext } from "../../context/AppContext";

const ExpenseItem = (currentExpense: Expense) => {
  // Exercise: Consume the AppContext here
  const { expenses, setExpenses } = useContext(AppContext);

  const handleDeleteExpense = (currentExpense: Expense) => {
    const expensesCopy = [...expenses];

    setExpenses(expensesCopy.filter((expense) => currentExpense.id !== expense.id));
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>{currentExpense.name}</div>
      <div>${currentExpense.cost}</div>
      <div>
        <button onClick={() => handleDeleteExpense(currentExpense)}>x</button>
      </div>
    </li>
  );
};

export default ExpenseItem;