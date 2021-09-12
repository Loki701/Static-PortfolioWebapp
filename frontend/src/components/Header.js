import React, { useState, useEffect} from 'react'
import './Header.css'

export default function Header() {

  const [click, setClick] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleClick = () => {
    setClick(!click)
}
  const closeMobileMenu = () =>setClick(false);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    if(windowWidth > 1400){
        closeMobileMenu();
    }
    return () => window.removeEventListener('resize', handleResize);
  });


  return (
    <>
        <nav  className={!click?'navbar':'navbar-active'}>
            <div className='navbar-container'>

                <a href="#Home" className={!click?'navbar-logo':'navbar-logo-active'} onClick={closeMobileMenu}>
                    Jose Figueredo
                    <i class='fab fa-typo3' />
                </a>

                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>   
                    <li className='nav-item'>
                      <a 
                      href="#Home"
                      className='nav-links' 
                      onClick={closeMobileMenu}>
                        HOME
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a
                        href="#Projects"
                        className='nav-links'
                        onClick={closeMobileMenu}
                      >
                        PROJECTS
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a
                        href="#Skills"
                        className='nav-links'
                        onClick={closeMobileMenu}
                      >
                        SKILLS
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a
                        href="#Experience"
                        className='nav-links'
                        onClick={closeMobileMenu}
                      >
                        EXPERIENCE
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a
                        href="#Contact"
                        className='nav-links'
                        onClick={closeMobileMenu}
                      >
                        CONTACT
                      </a>
                    </li>
                </ul>
            </div>  
        </nav>
    </>
  );
}