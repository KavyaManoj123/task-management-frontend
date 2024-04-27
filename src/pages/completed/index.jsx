import React, { useState, useEffect } from 'react';
import axios from '../../utils/index';
import Sidebar from '../../components/sidebar';
import Navbar from '../../components/navbar';
import TaskItem from '../../components/completedTaskCard';
import './style.css';

const CompletedPage = () => {
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    const fetchCompletedTasks = async () => {
      try {
        const response = await axios.get('/task'); // Adjust the API endpoint
        const tasks = response.data.filter(task => task.status === 'completed');
        setCompletedTasks(tasks);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchCompletedTasks();
  }, []);

  return (
    <div className="taskPage">
      <Navbar />
      <div className="cmpltpage">
        <Sidebar className="cmplt" />
        <div className="taskList">
          <h1>Completed Tasks</h1>
          <div className="flexbox">
            {completedTasks.map(task => (
              <div className="cardbox">
                <TaskItem key={task.id} task={task} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletedPage;
