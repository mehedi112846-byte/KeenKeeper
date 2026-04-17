import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-[24px] text-[#1F2937] font-bold">Keen<span className='text-[#244D3F]'>Keeper</span></a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>Timeline</a></li>
      <li><a>Stats</a></li>
      <li>
        <details>
          <summary>Filter</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
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