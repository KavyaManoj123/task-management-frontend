import Input from '../../components/Input';
import axios from '../../utils/index';
import { useState,useEffect } from 'react';
import { ToastContainer,toast } from 'react-toastify';
import { useNavigate,useParams } from 'react-router-dom';
import './style.css';

const createTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [createTask, setCreateTask] = useState({
    topic: '',
    description: '',
    dueDate: '',
    priority: '',
    status: '',
  });

  const onChange = (e, key) => {
    setCreateTask({ ...createTask, [key]: e.target.value });
  };

  const create = async () => {
    try {
      const response = await axios.post('http://localhost:4444/task', createTask);
      toast.success('Added new task', {
        onClose: () => {
          navigate('/task');
        },
        autoClose: 1000,
      });
    console.log(response)

    } catch (error) {
      console.error('Error adding task:', error);
      toast.error('Failed to add new task. Please try again.');
    }
  };
  return (
    <div className="maincrete">
      <ToastContainer/>
      <h1>Create new task</h1>
      <Input
          placeholder="Topic"
          value={createTask.topic}
          onChange={e => onChange(e, 'topic')}
        />
        <Input
          placeholder="Description"
          value={createTask.description}
          onChange={e => onChange(e, 'description')}
        />
        <Input
          placeholder="Due Date"
          value={createTask.dueDate}
          onChange={e => onChange(e, 'dueDate')}
        />
        <Input
          placeholder="Priority"
          value={createTask.priority}
          onChange={e => onChange(e, 'priority')}
        />
        <Input
          placeholder="status"
          value={createTask.status}
          onChange={e => onChange(e, 'status')}
        />
        <button onClick={create}>Add task</button>
    </div>
  );
};
export default createTask;
