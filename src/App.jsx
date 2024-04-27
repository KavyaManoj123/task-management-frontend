import { Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import MainPage from './pages/Home';
import Dashboard from './pages/dashboard'
import Task from './pages/task'
import Completed from './pages/completed'
import Progress from './pages/inprogress'
import Todo from './pages/todo'
import CreateTaskPage from './pages/createtask';
import Privateroute from './components/PrivateRoute'
import './App.css';

const App = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route element={<Privateroute  role="USER" path="/"/>}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/tasklist' element={<Task/>}/>
        <Route path='/completedtask' element={<Completed/>}/>
        <Route path='/progress' element={<Progress/>}/>
        <Route path='/todo' element={<Todo/>}/>
        <Route path='/createtask' element={<CreateTaskPage/>}/>
        </Route>

      </Routes>
    </div>
  );
};
export default App;
