import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../utils/index';
import Sidebar from '../../components/sidebar';
import TaskList from '../../components/TaskList';
import CompletedTasks from '../../components/completedtask';
import InProgressTasks from '../../components/inprogresstask';
import TaskSummaryCard from '../../components/TaskSummaryCard';
import Navbar from '../../components/navbar';
import './style.css';

const MainRoute = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [activeCategory, setActiveCategory] = useState('dashboard');

  useEffect(() => {
    if (activeCategory === 'dashboard') {
      getTasks();
    }
  }, [activeCategory]);

  const getTasks = async () => {
    try {
      const response = await axios.get('/task');
      const data = response.data.map(item => ({
        topic: item.topic,
        description: item.description,
        dueDate: item.dueDate,
        priority: item.priority,
        status: item.status,
        id: item._id,
      }));
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleCardClick = id => {
    navigate(`/task/${id}`);
  };

  return (
    <div className="mainContainer">
      <Navbar />

      <div className="disgn">
        <div className="sidebar">
          <Sidebar
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>

        <div className={`mainContent ${activeCategory === 'dashboard' ? 'dashboardContent' : ''}`}>
          {activeCategory === 'dashboard' && (
            <div>
              <TaskSummaryCard
                totalTasks={tasks.length}
                completedTasks={tasks.filter(task => task.status === 'completed').length}
                inProgressTasks={tasks.filter(task => task.status === 'inprogress').length}
                todoTasks={tasks.filter(task=>task.status==='todo').length}
              />
              <TaskList tasks={tasks} handleCardClick={handleCardClick} />
            </div>
          )}

          {activeCategory === 'completed' && (
            <CompletedTasks tasks={tasks.filter(task => task.status === 'completed')} />
          )}

          {activeCategory === 'inProgress' && (
            <InProgressTasks tasks={tasks.filter(task => task.status === 'inProgress')} />
          )}
        </div>
      </div>
    </div>
  );
};

export default MainRoute;
