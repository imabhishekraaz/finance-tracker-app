import React, { useEffect, useState } from 'react';
import {  Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';


const ProtectedRoute = () => {
    const isAuthenticated = localStorage.getItem("token") !== null;
    

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Sidebar />
            <div className="lg:pl-64 flex flex-col min-h-screen">
                <header className="sticky top-0 bg-white border-b border-gray-200 z-30 px-4 py-2">
                    <Navbar />
                </header>
                <main className="p-6 flex-grow">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default ProtectedRoute;