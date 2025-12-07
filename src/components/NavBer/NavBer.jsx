import React from 'react';
import Link from './Link';


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
    return (
        <nav>
            
        <ul className='flex'>
            {
               navigationData.map(route=><Link key={route.id} route={route}></Link>)
            }
        </ul>
          

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