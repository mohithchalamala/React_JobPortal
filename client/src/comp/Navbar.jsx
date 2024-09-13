import React, { useState } from 'react';
import companie from '../../public/images/companie.png';
import { Link, NavLink } from 'react-router-dom';
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [ismenuopen, setismenuopen] = useState(false);
  const handleMenuToggle = () => {
    setismenuopen(!ismenuopen);
  };

  const [navitems, setnavitems] = useState([
    { path: '/', title: 'Start a search', id: 1 },
    { path: '/my-job', title: 'My Jobs', id: 2 },
    { path: '/salary', title: 'Salary estimate', id: 3 },
    { path: '/post-job', title: 'Post A Job', id: 4 }
  ]);

  return (
    <header className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
      <nav className='flex justify-between items-center py-6'>
        <a href='/' className='flex items-center gap-2 text-2xl text-black'>
          <img style={{ width: '30px' }} src={companie} alt="Company Logo" />
          Job Portal
        </a>
        <ul className='hidden md:flex gap-12'>
          {navitems.map((items) => (
            <li className='text-base text-primary' key={items.id}>
              <NavLink to={items.path}>{items.title}</NavLink>
            </li>
          ))}
        </ul>

        <div className='text-base text-primary font-medium space-x-5 hidden lg:block'>
          <Link to='/login' className='py-2 px-5 border rounded'>
            Login
          </Link>
          <Link to='/signup' className='py-2 px-5 border rounded bg-blue text-white'>
            SignUp
          </Link>
        </div>

        <div className='md:hidden block'>
          <button onClick={handleMenuToggle}>
            {
              ismenuopen ? <FaXmark/> : <FaBarsStaggered className="w-5 h-5 text-primary"/>
            }
          </button>
        </div>
      </nav>

      {/* Nav items for mobile */}
      <div className={`px-4 bg-black py-5 rounded-sm' ${ismenuopen ? '' : "hidden"}`}>
        <ul>
        {navitems.map((items) => (
            <li className='text-base text-white' key={items.id}>
              <NavLink to={items.path}>{items.title}</NavLink>
            </li>
          ))}
          <li className='text-white py-1'><Link to='/login'>Login</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
