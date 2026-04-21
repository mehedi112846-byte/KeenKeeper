import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiClock, FiBarChart2 } from "react-icons/fi"; // আইকনগুলো দেখতে সুন্দর লাগবে

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm px-4 md:px-12">
                <div className="flex-1">
                    <Link to="/" className="btn btn-ghost text-[24px] text-[#1F2937] font-bold px-0 hover:bg-transparent">
                        Keen<span className='text-[#244D3F]'>Keeper</span>
                    </Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        <li>
                            <Link to="/" className="flex items-center gap-1 font-medium text-slate-600">
                                <FiHome /> Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/timeline" className="flex items-center gap-1 font-medium text-slate-600">
                                <FiClock /> Timeline
                            </Link>
                        </li>
                        <li>
                            <Link to="/stats" className="flex items-center gap-1 font-medium text-slate-600">
                                <FiBarChart2 /> Stats
                            </Link>
                        </li>
                        <li>
                            <details className="dropdown dropdown-end">
                                <summary className="flex items-center gap-1 font-medium text-slate-600 cursor-pointer">
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