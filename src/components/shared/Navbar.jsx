import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiClock, FiBarChart2 } from "react-icons/fi";

const Navbar = () => {
    // অ্যাক্টিভ এবং ইন-অ্যাক্টিভ স্টাইলগুলো আলাদা ভেরিয়েবলে রাখলাম যাতে কোড পরিষ্কার থাকে
    const activeClass = "bg-[#244D3F] text-white flex items-center gap-1 font-medium px-4 py-2 rounded-lg transition-all";
    const inactiveClass = "text-slate-600 hover:text-emerald-700 flex items-center gap-1 font-medium px-4 py-2 transition-all";

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm px-4 md:px-12">
                <div className="flex-1">
                    {/* লোগো সব সময় একরকম থাকবে */}
                    <NavLink to="/" className="btn btn-ghost text-[24px] text-[#1F2937] font-bold px-0 hover:bg-transparent">
                        Keen<span className='text-[#244D3F]'>Keeper</span>
                    </NavLink>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        <li>
                            <NavLink 
                                to="/" 
                                className={({ isActive }) => isActive ? activeClass : inactiveClass}
                            >
                                <FiHome /> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/timeline" 
                                className={({ isActive }) => isActive ? activeClass : inactiveClass}
                            >
                                <FiClock /> Timeline
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/stats" 
                                className={({ isActive }) => isActive ? activeClass : inactiveClass}
                            >
                                <FiBarChart2 /> Stats
                            </NavLink>
                        </li>
                        <li>
                            <details className="dropdown dropdown-end">
                                <summary className="flex items-center gap-1 font-medium text-slate-600 cursor-pointer px-4 py-2 hover:text-emerald-700">
                                    Filter
                                </summary>
                                <ul className="bg-base-100 rounded-t-none p-2 shadow-lg border border-slate-100 z-50">
                                    <li><a>All Friends</a></li>
                                    <li><a>Favorites</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;