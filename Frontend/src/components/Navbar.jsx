import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { IonIcon } from '@ionic/react';
import { navbar } from '../styles/navbar';
import {
    chevronDownOutline,
    notificationsOutline,
    menuOutline,
    closeOutline
} from 'ionicons/icons';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
 

const Navbar = ({ data }) => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const navigate = useNavigate();
    const profileRef = useRef(null);


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setIsProfileOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);

       
    }, []);

    const handleNavigation = (path) => {
        navigate(path);
        setIsProfileOpen(false);
        setIsDrawerOpen(false);
    };

    const handleLogout = () => {
        navigate('/login');
    };

    return (
        <>
            <nav className={`${navbar.navbarWrapper} flex items-center justify-between w-full`}>

                <div className={navbar.hamburgerWraper}>
                    <button
                        className={`${navbar.hamburger} lg:hidden`}
                        onClick={() => setIsDrawerOpen(true)}
                    >
                        <IonIcon icon={menuOutline} className={`${navbar.hamburgerIcon}`} />
                    </button>

                    <div className="lg:flex items-center hidden">
                        <img
                            src={logo}
                            alt="FinFlow Logo"
                            className={`${navbar.logo} cursor-pointer`}
                            onClick={() => handleNavigation('/')}
                        />
                        <h1
                            className={`${navbar.logoText} cursor-pointer`}
                            onClick={() => handleNavigation('/')}
                        >
                            FinFlow
                        </h1>
                    </div>
                </div>

                <div className={navbar.rightSectin}>
                    {/* Notification Bell */}
                    <Link to='/notifications'>
                        <button className={navbar.notificationBell}>
                            <IonIcon icon={notificationsOutline} className={navbar.notificationsIcon} />
                            <span className={navbar.notificationBadge}></span>
                        </button>
                    </Link>

                    {/* Profile   Area */}
                    <div
                        ref={profileRef}
                        className={navbar.profileDropDown}
                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                    >
                        <img
                            src="https://avatar.iran.liara.run/public"
                            alt="User Profile"
                            className={`${navbar.profileImage} pointer-events-none`}
                        />

                        <div className={`${navbar.profileBigScWrapper} pointer-events-none`}>
                            <p className={navbar.profileName}></p>
                        </div>
                        <IonIcon icon={chevronDownOutline} className={`${navbar.profileIcon} pointer-events-none`} />

                        {isProfileOpen && (
                            <div className={navbar.myProfile} onClick={(e) => e.stopPropagation()}>
                                <button onClick={() => handleNavigation('/profile')} className={navbar.profileTitle}>
                                    My Profile
                                </button>
                                <button onClick={() => handleNavigation('/settings')} className={navbar.setting}>
                                    Settings
                                </button>
                                <hr className={navbar.hrTag} />
                                <button onClick={handleLogout} className={navbar.logOutButton}>
                                    Log Out
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </nav>

            {isDrawerOpen && (
                <>
                    <div className={navbar.drawerOverlay} onClick={() => setIsDrawerOpen(false)} />
                    <div className={navbar.drawerContent} style={{ transform: isDrawerOpen ? 'translateX(0)' : 'translateX(-100%)' }}>
                        <div>
                            <div className={navbar.drawerHeader}>
                                <div className="flex flex-col gap-2">
                                    <p>{data?.data?.name || "Abhishek Raj"}</p>
                                    <p className='text-[10px]'>{data?.data?.name || 'ffabhishek116@gmail.com'}</p>
                                </div>
                                <button onClick={() => setIsDrawerOpen(false)} className="text-2xl text-gray-500 p-1">
                                    <IonIcon icon={closeOutline} />
                                </button>
                            </div>

                            <div className="flex flex-col gap-1">
                                <button onClick={() => handleNavigation('/')} className={navbar.profileTitle}>Dashboard</button>
                                <button onClick={() => handleNavigation('/income')} className={navbar.profileTitle}>Income</button>
                                <button onClick={() => handleNavigation('/expense')} className={navbar.profileTitle}>Expense</button>
                                <button onClick={() => handleNavigation('/settings')} className={navbar.setting}>Settings</button>
                            </div>
                        </div>

                        <div>
                            <hr className={navbar.hrTag} />
                            <button onClick={handleLogout} className={navbar.logOutButton}>Log Out</button>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Navbar;