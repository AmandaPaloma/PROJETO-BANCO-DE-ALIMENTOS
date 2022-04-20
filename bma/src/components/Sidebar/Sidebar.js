import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BMALogo from './images/BMALogo.png';
import * as BsIcons from 'react-icons/bs';
import { SidebarData } from './SidebarData';
import "./Sidebar.css";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const renderSidebarData = (sidedata,index) =>{
    return(
      <li key={`sidedata-${sidedata.id}`} className={sidedata.cName}>
        <Link to={sidedata.path}>{sidedata.icon}<span className='menu-title'>{sidedata.title}</span></Link><span className='tooltip'>{sidedata.title}</span>
      </li>
    )
  }
  return (
    <>
            
      <nav className={sidebar? 'nav-menu active' : 'nav-menu'}>
        <div className='bma-logo'>
        <Link to='/'> 
            <img src={BMALogo} />
        </Link>
        </div>
        <div className='navbar-toggle'>
        <Link to='#' className='navbar-arrow'>
           <BsIcons.BsFillArrowRightSquareFill onClick={showSidebar} />
        </Link>
        </div>
        <div className='navbar-open'>
        <Link to='#' className='navbar-arrow'>
           <BsIcons.BsFillArrowLeftSquareFill onClick={showSidebar} />
        </Link>
        </div>
        <ul className='nav-menu-items'> 
                           
          {SidebarData.map(renderSidebarData)}
         
        </ul>    
      </nav>
    </>
  )
}

export default Sidebar