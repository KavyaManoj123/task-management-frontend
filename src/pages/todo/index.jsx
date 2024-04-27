import React, { useState, useEffect } from 'react';
import axios from '../../utils/index';
import Sidebar from '../../components/sidebar';
import Navbar from '../../components/navbar';
import TaskItem from '../../components/completedTaskCard';
import './style.css';

const TodoPage = () => {
  const [todoTasks, setTodoTasks] = useState([]);

  useEffect(() => {
    const fetchTodoTasks = async () => {
      try {
        const response = await axios.get('/task'); // Adjust the API endpoint
        const tasks = response.data.filter(
          task => task.status !== 'completed' && task.status !== 'inprogress'
        );
        setTodoTasks(tasks);
      } catch (error) {
        console.error('Error fetching to-do tasks:', error);
      }
    };

    fetchTodoTasks();
  }, []);

  return (
    <div className="taskPage">
      <Navbar />
      <div className="todoPage">
        <Sidebar />
        <div className="taskList">
          <h1>To Do Tasks</h1>
          <div className="cardboxs">
            {todoTasks.map(task => (
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

export default TodoPage;
