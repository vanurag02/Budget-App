// LOCAL STORAGE
/* 
BELOW FUNCTION RETREIVES DATA FROM localStorage USING PROVIDED KEY
AND CONVERTS THE STORED JSON STRING BACK TO JAVASCRIPT OBJECT
*/
export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
