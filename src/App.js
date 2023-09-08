// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Profile from './components/profile/Profile';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from './firebase/Firebase';
import Navbar from './components/navbar/Navbar';
import Task from './components/task/Task';
import TeamManagement from './components/team/TeamManagement';
import Dashboard from './components/dashboard/Dashboard';


function App() {
const [user]=  useAuthState(auth)
const navigate=useNavigate()

if(!user){
  <div>loading</div>
}



  return (

    <div className="App">
      <header>
        <h2 className="text-2xl font-semibold mb-4 text-center">Task Management System</h2>
      </header>
      
      {
        user && <Navbar></Navbar>
      }
     
      <Routes>
        <Route path="/" element={<Login />} />
      {user && <><Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />}/>        
          <Route path="/task" element={<Task></Task>}/>
          <Route path="/teamManagement" element={<TeamManagement></TeamManagement>}/></>
          }
          <Route path="/register" element={<Register />} />
          {/* <Route path="/teams" element={<TeamList />} />
          <Route path="/teamDetail" element={<TeamDetail />} />
          <Route path="/tasks" element={<TaskList />} /> 
          <Route path="/tasks/create" element={<TaskForm />} />*/}
        
      </Routes>
    </div>

  );
}

export default App;
