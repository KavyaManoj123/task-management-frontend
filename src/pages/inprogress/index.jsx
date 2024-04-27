import React, { useState, useEffect } from 'react';
import axios from '../../utils/index';
import Sidebar from '../../components/sidebar';
import Navbar from '../../components/navbar';
import TaskItem from '../../components/completedTaskCard';
import './style.css';

const InProgressPage = () => {
  const [inProgressTasks, setInProgressTasks] = useState([]);

  useEffect(() => {
    const fetchInProgressTasks = async () => {
      try {
        const response = await axios.get('/task'); // Adjust the API endpoint
        const tasks = response.data.filter(
          task => task.status === 'inprogress'
        );
        setInProgressTasks(tasks);
      } catch (error) {
        console.error('Error fetching in progress tasks:', error);
      }
    };

    fetchInProgressTasks();
  }, []);

  return (
    <div className="taskPage">
      <Navbar />
      <div className="inProgressPage">
        <Sidebar />
        <div className="taskList">
          <h1>In Progress Tasks</h1>
          <div className="boxcard">
            {inProgressTasks.map(task => (
              <div className="singlecard">
                <TaskItem key={task.id} task={task} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InProgressPage;
