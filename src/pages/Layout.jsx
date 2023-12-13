import React, { useEffect, useState } from 'react';
import { Outlet, Link, useLocation } from "react-router-dom";
import '../assets/css/layout.css';
import logo from '/images/logo.png';
import ScrollToTop from '../components/ScrollToTopButton'
import { IonIcon } from '@ionic/react';
import { menuOutline, closeOutline, logoTwitter, 
        logoGithub, logoInstagram, logoYoutube,
        searchOutline, logInOutline, logoDiscord,
        logoTwitch, logoXbox } from 'ionicons/icons';


function Layout() {
    // Use the useLocation hook to get the current location object
    const location = useLocation();
    // State to manage the "active" class for navbar, overlay, and body
    const [isNavbarActive, setIsNavbarActive] = useState(false);
    const [isOverlayActive, setIsOverlayActive] = useState(false);

    // Check the path name of the current location/page
    useEffect(() => {
        if (location.pathname === '/') {
            document.title = 'Home - Gamers zone';
        } else if (location.pathname === '/about') {
            document.title = 'About - Gamers zone';
        } else if (location.pathname === '/team') {
            document.title = 'Team - Gamers zone';
        } else if (location.pathname === '/agents') {
            document.title = 'Agents - Gamers zone';
        } else if (location.pathname === '/arsenal') {
            document.title = 'Arsenal - Gamers zone';
        } else if (location.pathname ==='/maps') {
            document.title = 'Maps - Gamers zone';
        }
    }, [location]);
  
    // Function to toggle the "active" class
    function elemToggleFunc() {
      setIsNavbarActive((prevIsActive) => !prevIsActive);
      setIsOverlayActive((prevIsActive) => !prevIsActive);
    };

    return (
        <section>
            <div className="top">

                {/* HEADER */}

                <header className="header">
            
                {/* Overlay */}

                <div className={`overlay ${ isOverlayActive ? 'active' : '' }`}></div>
            
                    <div className="container">
                
                        <a href="#" className="logo">
                            <img src={logo} alt="GameX logo" />
                        </a>
                
                        <button className="nav-open-btn" onClick={elemToggleFunc}>
                            <IonIcon icon={menuOutline} />
                        </button>
                
                        <nav className={`navbar ${ isNavbarActive ? 'active' : '' }`}>
                
                        <div className="navbar-top">
                
                            <a href="#" className="logo">
                            <img src={logo} alt="Gamer zone logo" />
                            </a>
                
                            <button className="nav-close-btn" onClick={elemToggleFunc}>
                                <IonIcon icon={closeOutline} />
                            </button>
                
                        </div>
                
                        <ul className="navbar-list">
                    
                            <li>
                                <Link to="/" className={` navbar-link ${(location.pathname === `/`)}`}>Home</Link>
                            </li>
                    
                            <li>
                                <Link to="/about" className={` navbar-link ${(location.pathname === `/about`)}`}
                                onClick={elemToggleFunc}
                                >About</Link>
                            </li>
                            
                            <li>
                                <Link to="/team" className={` navbar-link ${(location.pathname === `/team`)}`}
                                onClick={elemToggleFunc}
                                >Team</Link>
                            </li>
                            
                            <li>
                                <Link to="/agents" className={` navbar-link ${(location.pathname === `/agents`)}`}
                                onClick={elemToggleFunc}
                                >Agents</Link>
                            </li>
                            
                            <li>
                                <Link to="/arsenal" className={` navbar-link ${(location.pathname === `/arsenal`)}`}
                                onClick={elemToggleFunc}
                                >Arsenal</Link>
                            </li>
                            
                            <li>
                                <Link to="/maps" className={` navbar-link ${(location.pathname === `/maps`)}`}
                                onClick={elemToggleFunc}
                                >Maps</Link>
                            </li>
                            
                        </ul>
                
                        <ul className="nav-social-list">
                
                            <li>
                            <a href="#" className="social-link">
                                <IonIcon icon={logoTwitter} />
                            </a>
                            </li>
                
                            <li>
                            <a href="#" className="social-link">
                                <IonIcon icon={logoInstagram} />
                            </a>
                            </li>
                
                            <li>
                            <a href="#" className="social-link">
                                <IonIcon icon={logoGithub} />
                            </a>
                            </li>
                
                            <li>
                            <a href="#" className="social-link">
                                <IonIcon icon={logoYoutube} />
                            </a>
                            </li>
                
                        </ul>
                
                        </nav>
                
                        <div className="header-actions">
                
                        <button className="search">
                            <IonIcon icon={searchOutline} />
                        </button>
                
                        <button className="btn-sign_in">
                
                            <div className="icon-box">
                            <IonIcon icon={logInOutline} />
                            </div>
                
                            <span>Log-in</span>
                
                        </button>
                
                        </div>
                
                    </div>
            
                </header>
        
            </div>


            {/* MAIN CONTENT */}

            <main>
                <article>

                    < Outlet />

                </article>
            </main>

            
            {/* FOOTER */}

            <footer>

                <div className="footer-top">
                    <div className="container">

                        <div className="footer-brand-wrapper">

                            <a href="#" className="logo">
                                <img src={ logo } alt="GameX logo" />
                            </a>

                            <div className="footer-menu-wrapper">

                                <ul className="footer-menu-list">
                                    
                                    <li>
                                        <Link to="/" className="footer-menu-link">Home</Link>
                                    </li>
                                    
                                    <li>
                                        <Link to="/about" className="footer-menu-link">About</Link>
                                    </li>
                                    
                                    <li> 
                                        <Link href='#top' to="/team" className="footer-menu-link">Team</Link>
                                    </li>
                                    
                                    <li>
                                        <Link to="/agents" className="footer-menu-link">Agents</Link>
                                    </li>
                                    
                                    <li>
                                        <Link to="/arsenal" className="footer-menu-link">Arsenal</Link>
                                    </li>
                                    
                                    <li>
                                        <Link to="/maps" className="footer-menu-link">Map</Link>
                                    </li>

                                </ul>

                                <div className="footer-input-wrapper">
                                    <input type="text" name="message" required placeholder="Find Here Now" className="footer-input" />

                                    <button className="btn btn-primary">
                                        <IonIcon icon={searchOutline} />
                                    </button>
                                </div>

                            </div>

                        </div>

                        <div className="footer-quicklinks">

                            <ul className="quicklink-list">

                                <li>
                                    <a href="#" className="quicklink-item">Faq</a>
                                </li>

                                <li>
                                    <a href="#" className="quicklink-item">Help center</a>
                                </li>

                                <li>
                                    <a href="#" className="quicklink-item">Terms of use</a>
                                </li>

                                <li>
                                    <a href="#" className="quicklink-item">Privacy</a>
                                </li>

                            </ul>

                            <ul className="footer-social-list">

                                <li>
                                    <a href="#" className="footer-social-link">
                                        <IonIcon icon={logoDiscord} />
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="footer-social-link">
                                        <IonIcon icon={logoTwitch} />
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="footer-social-link">
                                        <IonIcon icon={logoXbox} />
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="footer-social-link">
                                        <IonIcon icon={logoYoutube} />
                                    </a>
                                </li>

                            </ul>

                        </div>

                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="container">
                        <p className="copyright">
                            Copyright &copy; 2023 <a href="#">carlomiranda</a>. all rights reserved
                        </p>
                    </div>
                </div>

            </footer>

            {/* SCROLL TO TOP */}

            < ScrollToTop />

        </section>

    )
}

export default Layout;