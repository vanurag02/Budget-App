// LOCAL STORAGE
/* 
BELOW FUNCTION RETREIVES DATA FROM localStorage USING PROVIDED KEY
AND CONVERTS THE STORED JSON STRING BACK TO JAVASCRIPT OBJECT
*/

const generateRandomColor = () => {
  const existingBudgetLength = fetchData("budgets")?.length ?? 0;
  return `${existingBudgetLength * 34} 65% 50%`;
};

export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

// CREATE BUDGET
export const createBudget = ({ name, amount }) => {
  const newItem = {
    id: crypto.randomUUID,
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    color: generateRandomColor(),
  };

  const existingBudgets = fetchData("budgets") ?? [];
  return localStorage.setItem(
    "budgets",
    JSON.stringify([...existingBudgets, newItem]),
  );
};

// DELETE ITEM
export const deleteItem = ({ key }) => {
  return localStorage.removeItem(key);
};
