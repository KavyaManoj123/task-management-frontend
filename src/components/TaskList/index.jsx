// TaskList.js

import React from 'react';

const TaskList = ({ tasks, handleCardClick }) => {
  return (
    <table className="taskTable">
      <thead>
        <tr>
          <th>Topic</th>
          <th>Description</th>
          <th>Due Date</th>
          <th>Priority</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map(item => (
          <tr key={item.id} onClick={() => handleCardClick(item.id)}>
            <td>{item.topic}</td>
            <td>{item.description}</td>
            <td>{item.dueDate}</td>
            <td>{item.priority}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TaskList;
