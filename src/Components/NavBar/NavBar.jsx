import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';


const navigationLinks = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];


const NavBar = () => {

    const [open, setOpen] =  useState(false);

    const link = navigationLinks.map(route => <Link route={route} key={route.id}></Link>);

    return (
        <nav className='flex justify-between mx-10 mt-4'>
            <span className='flex gap-3' onClick={()=> setOpen(!open)}>
            {
                open ? <X className='md:hidden'></X> :
                <Menu className='md:hidden'></Menu> 
            }
            <ul className={`md:hidden absolute ${open ? 'top-6' : '-top-40'} bg-amber-200 duration-400 `}>
                {link}
            </ul>               
            <h3>NavBar</h3>
            
            </span>
            <ul className=' md:flex gap-7 hidden'>
                {
                    link
                }
            </ul>
            <button>Sign In</button>
        </nav>
    );
};

export default NavBar;