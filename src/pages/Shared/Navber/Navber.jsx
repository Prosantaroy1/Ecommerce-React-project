import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {

    const navlist=<>
        <li className='text-lg'><Link className='hover:text-yellow-300' to='/'>Home</Link></li>
        <li className='text-lg'><Link className='hover:text-yellow-300'>Product</Link></li>
        <li className='text-lg'><Link className='hover:text-yellow-300'>Service</Link></li>
        <li className='text-lg'><Link className='hover:text-yellow-300'>Contact</Link></li>
    </>

    return (
        <div>
            <div className="navbar bg-slate-700 text-white">
                 <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content  gap-4 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navlist}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-2xl">T-SHOP</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="flex flex-row px-1 gap-6">
      {navlist}
    </ul>
  </div>
  <div className="navbar-end">
     <Link className='text-xl'>Login</Link>
  </div>
</div>
        </div>
    );
}

export default Navber;