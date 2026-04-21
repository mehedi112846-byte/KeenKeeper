import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiClock, FiBarChart2, FiChevronDown } from "react-icons/fi";
import { useFilter } from '../../context/filterContext';

const Navbar = () => {
    const { setFilter } = useFilter();


    const activeClass = "bg-[#244D3F] text-white flex items-center gap-1 font-medium px-4 py-2 rounded-lg transition-all";
    const inactiveClass = "text-slate-600 hover:text-emerald-700 flex items-center gap-1 font-medium px-4 py-2 transition-all";

    // function for stop dropdown by clicking the filter button
    const handleFilterClick = (filterType) => {
        setFilter(filterType);
        // make blur the dropdown button 
        if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }
    };

    return (
        <nav className="sticky top-0 z-[100]">
            <div className="navbar bg-base-100 shadow-sm px-4 md:px-12">
                <div className="flex-1">
                    {/* logo */}
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
                        
                        {/* filter dropdown */}
                        <li className="dropdown dropdown-end">
                            <label tabIndex={0} className="flex items-center gap-1 font-medium text-slate-600 cursor-pointer px-4 py-2 hover:text-emerald-700">
                                Filter <FiChevronDown size={14} />
                            </label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow-lg bg-base-100 rounded-box w-52 border border-slate-100 z-[100] mt-1">
                                // using onClick event to show filtered cards only
                                <li><button onClick={() => handleFilterClick('all')}>All Friends</button></li>
                                <li><button onClick={() => handleFilterClick('overdue')}>Overdue</button></li>
                                <li><button onClick={() => handleFilterClick('almost-due')}>Almost Due</button></li>
                                <li><button onClick={() => handleFilterClick('on-track')}>On Track</button></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;