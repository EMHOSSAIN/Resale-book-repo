import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../../Components/logo/logo.jpg'
import { AuthContext } from '../../../Context/AuthProvider';
import {CgProfile} from 'react-icons/cg'
import toast from 'react-hot-toast';

const Navbar = () => {
    const {user,logout}=useContext(AuthContext)
    const handleLogout=()=>{
        logout()
        .then(result=>{
            toast.success("Logout Successfully")
        })
        .catch(error=>{})
    }
    const navBarItem =
        <>
            <li> <Link to='/'>Home</Link></li>
            <li> <Link to='/blog'>Blog</Link></li>
          {
            user?.uid?
            <button onClick={handleLogout} className="btn btn-warning">Logout</button>
            :
            <li> <Link to='/login'>Login</Link></li>
          }
        </>
      
    return (
        
            <div  className="navbar bg-green-300 rounded-md">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2  ">
                            {navBarItem}
                        </ul>
                    </div>
                    <div class="w-10 rounded-md ">
                        <img src={img} alt='' />
                    </div>
                    < Link to='/' className="btn btn-outline border-none italic text-2xl pl-4">STRINKINGLY</Link>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal pl-8">
                        {navBarItem}
                    </ul>
                </div>
                <div className="navbar-end">
                   {
                    user?.uid?
                    <div class="w-10 rounded-md ">
                        <img src={user?.photoURL} alt='' />
                    </div>
                     :
                    <CgProfile className='font-5xl'/>
                   }
                </div>
            </div>
       
    );
};

export default Navbar;