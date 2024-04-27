import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClipboard,
  faListCheck,
  faCalendarCheck,
  faBarsProgress,
  faListOl,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './style.css';

const Sidebar = () => {
const navigate= useNavigate()

  const dashClick=()=>{
    navigate('/dashboard')
  }
  const taskClick=()=>{
    navigate('/task')
  }

  return (
    <div className=""sidebar>
      <div className="sidebarItems" >
        {/* Render sidebar navigation items with icons */}
        <Link to="/dashboard" className="sidebarItem" activeClassName="active" onClick={dashClick}>
          <FontAwesomeIcon icon={faClipboard} className="sidebarIcon" />
          Dashboard
        </Link>
        <Link to="/tasklist" className="sidebarItem" activeClassName="active" onClick={taskClick}>
          <FontAwesomeIcon icon={faListCheck} className="sidebarIcon" />
          Tasks
        </Link>
        <Link to="/completedtask" className="sidebarItem" activeClassName="active">
          <FontAwesomeIcon icon={faCalendarCheck} className="sidebarIcon" />
          Completed
        </Link>
        <Link to="/progress" className="sidebarItem" activeClassName="active">
          <FontAwesomeIcon icon={faBarsProgress} className="sidebarIcon" />
          In Progress
        </Link>
        <Link to="/todo" className="sidebarItem" activeClassName="active">
          <FontAwesomeIcon icon={faListOl} className="sidebarIcon" />
          To Do
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
