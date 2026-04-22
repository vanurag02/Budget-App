// LOCAL STORAGE

// DELAY FOR BUDGET SUBMISSION
export const waait = () =>
  new Promise((res) => setTimeout(res, Math.random() * 800));

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
    id: crypto.randomUUID(), // FIXED (added ())
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
    id: crypto.randomUUID(),
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
    if (expense.budgetId !== budgetId) return acc;
    return acc + expense.amount;
  }, 0);
  return budgetSpent;
};

// FORMATTING FUNCTIONS

export const formatDateToLocaleString = (epoch) =>
  new Date(epoch).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

// Currency
export const formatCurrency = (amt) => {
  return amt.toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
  });
};

// PERCENTAGES
export const formatPercentage = (amt) => {
  return amt.toLocaleString(undefined, {
    style: "percent",
    minimumFractionDigits: 0,
  });
};
