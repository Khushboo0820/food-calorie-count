import React, { useState, useEffect } from "react";
import FoodEntryForm from "./components/FoodEntryForm";
import CalorieList from "./components/CalorieList";

const App = () => {
  // Step 1: Load data from localStorage during initialization
  const [entries, setEntries] = useState(() => {
    const savedEntries = localStorage.getItem("calorieEntries");
    return savedEntries ? JSON.parse(savedEntries) : []; // Default to an empty array
  });

  // Step 2: Save data to localStorage whenever entries change
  useEffect(() => {
    localStorage.setItem("calorieEntries", JSON.stringify(entries));
  }, [entries]);

  const addEntry = (entry) => {
    setEntries([...entries, entry]);
  };

  return (
    <div>
      <h1>Calorie Counter</h1>
      <FoodEntryForm onAddEntry={addEntry} />
      <CalorieList entries={entries} />
    </div>
  );
};

export default App;
