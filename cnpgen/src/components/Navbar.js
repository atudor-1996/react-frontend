import React, { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from './SidebarData';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            
                <div>
                    <div className="navbar">
                    <IconContext.Provider value={{ color: '#fff'  }}>
                        <Link to="#" className="menu-bars">
                            <FaIcons.FaBars onClick={showSidebar} />
                        </Link>
                        </IconContext.Provider>
                    </div>
                </div>
                
                
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' >
                        <li className='navbar-toggle'>
                            <Link to="#" className='menu-bars'>
                            <IconContext.Provider value={{color:"black"}}>
                                <AiIcons.AiOutlineClose onClick={showSidebar} />
                                </IconContext.Provider>
                            </Link>
                        </li>
                        
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName} onClick={showSidebar}>
                                    <IconContext.Provider value={{ }}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                    </IconContext.Provider>
                                </li>
                            )
                        })}
                        
                    </ul>
                </nav>
                
            
        </>
    )
}

export default Navbar
