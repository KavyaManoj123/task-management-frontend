import React from 'react';

const TaskItem = ({ task }) => {
  const { id, topic, description, dueDate, priority } = task;

  return (
    <div className="taskItem">
      <h3>{topic}</h3>
      <p>Description: {description}</p>
      <p>Due Date: {dueDate}</p>
      <p>Priority: {priority}</p>
      
    </div>
  );
};

export default TaskItem;
