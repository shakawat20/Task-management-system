// components/Navbar.js

import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/Firebase';
import { useSignOut } from 'react-firebase-hooks/auth';

const Navbar = () => {
  const [user,lLoading,lError]=useAuthState(auth)
  const [signOut, loading, error] = useSignOut(auth);
  // useEffect(()=>{},[user])

  return (
    <nav className="bg-blue-500 p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/dashboard" className="text-white text-xl font-semibold">Task Management App</Link>
        <ul className="flex space-x-4">
        
          <li><Link to="/dashboard" className="text-white hover:underline">Dashboard</Link></li>
          <li><Link to="/task" className="text-white hover:underline">Tasks</Link></li> 
          <li><Link to="/teamManagement" className="text-white hover:underline">Teams</Link></li>
          <li><Link to="/profile" className="text-white hover:underline">Profile</Link></li> 
          {
            user && <li><Link to="/"onClick={()=>signOut()}  className="text-white hover:underline">Logout</Link></li>
          }
          {
            !user && <li><Link to="/" className="text-white hover:underline">Login</Link></li>
          }

         

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
