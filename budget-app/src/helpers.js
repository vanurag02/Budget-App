// LOCAL STORAGE
/* 
BELOW FUNCTION RETREIVES DATA FROM localStorage USING PROVIDED KEY
AND CONVERTS THE STORED JSON STRING BACK TO JAVASCRIPT OBJECT
*/

// DELAY FOR BUDGET SUBMISSION
export const waait = () =>
  new Promise((res) => setTimeout(res, Math.random() * 1500));

// COLORS
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

// ADD AN EXPENSE
export const createExpense = ({ name, amount, budgetId }) => {
  const newItem = {
    id: crypto.randomUUID,
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    budgetId: budgetId,
  };

  const existingExpenses = fetchData("expenses") ?? [];
  return localStorage.setItem(
    "expenses",
    JSON.stringify([...existingExpenses, newItem]),
  );
};

// DELETE ITEM
export const deleteItem = ({ key }) => {
  return localStorage.removeItem(key);
};

// TOTAL SPENT BY BUDGET
export const calculateSpentByBudget = (budgetId) => {
  const expenses = fetchData("expenses") ?? [];
  const budgetSpent = expenses.reduce((acc, expense) => {
    // CHECK IF expense.id === budgetId THAT IS PASSED IN
    if (expense.budgetId !== budgetId) return acc;

    // ADD THE CURRENT AMOUNT TO TOTAL
    return (acc += expense.amount);
  }, 0);
  return budgetSpent;
};

// FORMATTING FUNCTIONS

// Currency
export const formatCurrency = (amt) => {
  return amt.toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
  });
};

// PERCENTAGES
export const formatPercent = (amt) => {
  return amt.toLocaleString(undefined, {
    style: "percent",
    minimumFractionDigits: 0,
  });
};
