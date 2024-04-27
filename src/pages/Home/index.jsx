import Input from '../../components/Input';
import Button from '../../components/Button';
import axios from '../../utils/index.js';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import './style.css';

const mainPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {}, []);

  const onChange = async (e, key) => {
    setLoginData({ ...loginData, [key]: e.target.value });
  };

  const login = async () => {
    const response = await axios.post('/boss/login', loginData);
    if (response.data && response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    console.log(response);
    toast.success('Login successful', {
      onClose: () => {
        navigate('/dashboard');
      },
      autoClose: 1000,
    });
  };

  return (
    <div className="mainrou">
      <ToastContainer />
      <div className="text1">
        <p>Mange all your task in one place!</p>
        <h1>Task</h1>
        <h1>Scheduling</h1>
        <h1>Application</h1>
      </div>
      <div className="loginsignup">
        <div className="textcontent">
          <h1>Welcome back!</h1>
          <p>Keep all your credentials safe!</p>
        </div>
        <label>Email Address:</label>
        <Input placeholder="yours@gmail.com" onChange={e => onChange(e, 'email')} />
        <label>Password:</label>
        <Input
          placeholder="password"
          type="password"
          onChange={e => onChange(e, 'password')}
        />
        <Button className="bobtn" onClick={login}>Login</Button>
      </div>
    </div>
  );
};

export default mainPage;
