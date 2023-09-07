// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './components/login/Login';
import Register from './components/register/Register';
import TaskList from './components/task/TaskList';
import TaskForm from './components/task/TaskForm';
import TeamList from './components/team/TeamList';
import TeamDetail from './components/team/TeamDetail';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase/Firebase';
import Navbar from './components/navbar/Navbar';




function App() {
const [user]=  useAuthState(auth)
  return (

    <div className="App">
      <header>
        <h2 className="text-2xl font-semibold mb-4 text-center">Task ManagementSystem</h2>
      </header>
      {/* Include the Navbar component */}
      {/* <Login></Login> */}
      {
        user && <Navbar></Navbar>
      }

      <Routes>
        <Route path="/" element={<Login />} />
        

        <>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/register" element={<Register />} />
          <Route path="/teams" element={<TeamList />} />
          <Route path="/teamsDetail" element={<TeamDetail />} />
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/tasks/create" element={<TaskForm />} />
        </>
      </Routes>
    </div>

  );
}

export default App;
