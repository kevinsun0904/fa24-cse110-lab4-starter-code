import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { getBudget, updateBudget } from "../../utils/budget-utils";

const Budget = () => {
  const {budget, setBudget} = useContext(AppContext);
  useEffect(() => {
    getBudget()
      .then((data) => {
        setBudget(data.amount);
      })
      .catch((error) => {
        console.error("Failed to fetch budget:", error);
      });
  }, [budget]);

  const onUpdateBudget = (event: React.FocusEvent<HTMLSpanElement>) => {
    const newBudgetValue = event.target.textContent?.trim();

    const newBudget = parseFloat(newBudgetValue || "");

    if (isNaN(newBudget) || newBudget < 0) {
      // event.target.textContent = budget.toString();
      alert("Please enter a valid budget amount.");
      return;
    }
    setBudget(newBudget);

    // Update the budget on the server
    updateBudget(newBudget).catch((error) => {
      console.error("Failed to update budget:", error);
      setBudget(budget);
      // event.target.textContent = budget.toString();
    });
  };
  
  return (
    <div className="alert alert-secondary p-3 d-flex align-items-center justify-content-between">
      <div>Budget: $<span contentEditable={true} onBlur={(event) => onUpdateBudget(event)}>{budget}</span></div>
    </div>
  );
};

export default Budget;
