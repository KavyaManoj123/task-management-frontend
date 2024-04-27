import React, { useState, useEffect } from 'react';
import axios from '../../utils/index';
import Sidebar from '../../components/sidebar';
import Navbar from '../../components/navbar';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import './style.css';

const TaskPage = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    try {
      const response = await axios.get('/task');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const newtask = () => {
    navigate('/createtask');
  };

  return (
    <div className="taskPageContainer">
      <Navbar />
      <div className="taskPageContent">
        <Sidebar />
        <div className="taskList">
          <div className="taskbar">
            <h1>Tasks</h1>
            <Button className="taskbtn" onClick={newtask}>
              New Task
            </Button>
          </div>
          <div className="singleCard">
            {tasks.map(task => (
              <div className="taskCard" key={task._id}>
                <h3>{task.topic}</h3>
                <p>{task.description}</p>
                <p>Due Date: {task.dueDate}</p>
                <p>Priority: {task.priority}</p>
                <p>Status: {task.status}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
