import React from 'react';
import './style.css';

const TaskSummaryCard = ({ totalTasks, completedTasks, inProgressTasks, todoTasks }) => {
  return (
    <div className="taskSummaryCard">
      <div className="summaryItem">
        <div className="summaryLabel">TOTAL TASK</div>
        <div className="summaryValue">{totalTasks}</div>
        <i class="fa-brands fa-stack-overflow"></i>
      </div>
      <div className="summaryItem">
        <div className="summaryLabel">COMPLETED TASK</div>
        <div className="summaryValue">{completedTasks}</div>
        <i class="fa-solid fa-table-cells-column-lock"></i>
      </div>
      <div className="summaryItem">
        <div className="summaryLabel">TASK IN PROGRESS</div>
        <div className="summaryValue">{inProgressTasks}</div>
        <i class="fa-solid fa-keyboard"></i>
      </div>
      <div className="summaryItem">
        <div className="summaryLabel">TODOS</div>
        <div className="summaryValue">{todoTasks}</div>
        <i class="fa-regular fa-rectangle-list"></i>
      </div>
    </div>
  );
};

export default TaskSummaryCard;
