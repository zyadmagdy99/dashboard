import React, { useContext, useEffect, useState } from 'react'
import "./Sidebar.css"
import { personsImgs} from "../../utils/images" 
import { navigationLinks } from "../../data/data"
import { SidebarContext } from '../../context/sidebarContext';

 
export default function Sidebar() {
  const [activeLinkIdx]= useState(1);
  const [sidebarClass, setsidebarClass] = useState('')
  const {isSidebarOpen} = useContext(SidebarContext)

  useEffect(() => {
    if(isSidebarOpen){
      setsidebarClass('sidebar-change')
    }else{
      setsidebarClass('')
    }
  
  }, [isSidebarOpen])
  
  return (
    <div className={`sidebar ${sidebarClass}`}>
        <div className='user-info'>
          <div className='info-img img-fit-cover'>
            <img src={personsImgs.person_two} alt="" />
          </div>
            <span className='info-name'> alice-doe</span>
          </div> 
          <nav className='navigation'>
            <ul className='nav-list'>
              {
                navigationLinks.map((navigationLink)=>(
                  <li className='nav-item' key={navigationLink.id}>
                    <a href="#" className={`nav-link ${navigationLink.id==activeLinkIdx?'active':null}`}>
                      <img src={navigationLink.image} className='nav-link-icon' alt="" />
                      <span className='nav-link-text'>{navigationLink.title}</span>
                    </a>
                  </li>
                ))
              }
            </ul>
            </nav>    
    </div>
  )
}
