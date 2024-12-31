import React, { useState } from "react";

const FoodEntryForm = ({ onAddEntry }) => {
  const [food, setFood] = useState("");
  const [calories, setCalories] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!food || !calories || !date) return;
    onAddEntry({ food, calories: Number(calories), date });
    setFood("");
    setCalories("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Food name"
        value={food}
        onChange={(e) => setFood(e.target.value)}
      />
      <input
        type="number"
        placeholder="Calories"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">Add Entry</button>
    </form>
  );
};

export default FoodEntryForm;
