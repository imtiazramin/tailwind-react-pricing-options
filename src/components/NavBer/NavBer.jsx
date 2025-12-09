import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';


const navigationData = [
  {
    "id": 1,
    "name": "Home",
    "path": "/"
  },
  {
    "id": 2,
    "name": "Services",
    "path": "/services"
  },
  {
    "id": 3,
    "name": "About ",
    "path": "/about"
  },
  {
    "id": 4,
    "name": "Blog",
    "path": "/blog"
  },
  {
    "id": 5,
    "name": "Contact",
    "path": "/contact"
  }
]





const NavBer = () => {
    const [open,setOpen]=useState(false);
    const links=navigationData.map(route=><Link key={route.id} route={route}></Link>);
    return (
        <nav className='flex justify-between  mx-10 my-5 items-center'>
            <span className='flex ' onClick={()=>setOpen(!open)}> 
                {open ? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>}
              <ul className={`md:hidden  -ml-18 duration-1000 ${open ? 'top-12' : '-top-40'} p-3   bg-amber-200 absolute hover:bg-amber-700`}> 
                {
                    links
                }
              </ul>
               <h3 className='ml-8 '>My Navber</h3>
            </span>
             
        <ul className='md:flex hidden '>
            {
               links
            }
        </ul>
          <button className=''>Sing In</button>

            {/* <ul className='flex'>
                {
                    navigationData.map(route=><li className='ml-10'><a href={route.path}>{route.name}</a></li>
)
                }
            </ul> */}
            {/* <ul className='flex'>
                <li className='ml-10'><a href="/">Home</a></li>
                <li className='ml-10'><a href="/about">About</a></li>
                <li className='ml-10'><a href="/blog">Blog</a></li>
            </ul> */}
        </nav>
    );
};

export default NavBer;