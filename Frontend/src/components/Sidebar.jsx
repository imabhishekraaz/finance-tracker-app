import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { navbar } from '../styles/navbar'; // Reusing your styles or adding new ones
import logo from '../assets/logo.png';

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogOut = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    const menuItems = [
        { name: 'Dashboard', path: '/' },
        { name: 'Income', path: '/income' },
        { name: 'Expense', path: '/expense' },
        { name: 'Settings', path: '/settings' },
    ];

    return (
        <aside className="fixed top-0 left-0 h-screen w-64 bg-white border-r border-gray-200 hidden lg:flex flex-col justify-between p-4 z-40">
            <div>
                {/* Branding */}
                <div className="flex items-center gap-2 mb-8 px-2 cursor-pointer lg:block" onClick={() => navigate('/')}>
                    <img src={logo} alt="FinFlow Logo" className="w-8 h-8 object-contain" />
                    <h1 className="text-xl font-bold text-gray-800">FinFlow</h1>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col gap-1">
                    {menuItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <button
                                key={item.path}
                                onClick={() => navigate(item.path)}
                                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                                    isActive 
                                        ? 'bg-blue-50 text-blue-600' 
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                }`}
                            >
                                {item.name}
                            </button>
                        );
                    })}
                </nav>
            </div>

            {/* Bottom Section (Optional Logout) */}
            <div>
                <hr className="border-gray-200 my-4" />
                <button 
                    onClick={handleLogOut} 
                    className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
                >
                    Log Out
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;