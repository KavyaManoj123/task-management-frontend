// InProgressTasks.js

import React from 'react';

const InProgressTasks = ({ tasks }) => {
  return (
    <div>
      <h2>In Progress Tasks</h2>
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

export default InProgressTasks;
