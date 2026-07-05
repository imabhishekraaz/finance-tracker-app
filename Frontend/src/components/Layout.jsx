import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

const MainLayout = ({ children, userData }) => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Sidebar />
            <div className="lg:pl-64 flex flex-col min-h-screen">
                <header className="sticky top-0 bg-white border-b border-gray-200 z-30 px-4 py-2">
                    <Navbar data={userData} />
                </header>
                <main className="p-6 flex-grow">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default MainLayout;