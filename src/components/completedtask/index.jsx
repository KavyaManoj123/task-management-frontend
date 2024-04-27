// CompletedTasks.js

import React from 'react';

const CompletedTasks = ({ tasks }) => {
  return (
    <div>
      <h2>Completed Tasks</h2>
      <ul>
        {tasks.map(item => (
          <li key={item.id}>
            <strong>{item.topic}</strong> - {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompletedTasks;
