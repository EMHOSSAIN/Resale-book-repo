import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Share/Navbar/Navbar';

const BashBoardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="DashBoard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                   <Outlet></Outlet>
                  </div>
                <div className="drawer-side">
                    <label htmlFor="DashBoard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                       
                       <li> <Link to='/admin'>Admin</Link> </li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default BashBoardLayout;