import React from "react";

const CalorieList = ({ entries }) => {
  const groupedEntries = entries.reduce((acc, entry) => {
    acc[entry.date] = acc[entry.date] || [];
    acc[entry.date].push(entry);
    return acc;
  }, {});

  return (
    <div>
      {Object.keys(groupedEntries).map((date) => (
        <div key={date}>
          <h3>{date}</h3>
          <ul>
            {groupedEntries[date].map((entry, index) => (
              <li key={index}>
                {entry.food}: {entry.calories} calories
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CalorieList;
