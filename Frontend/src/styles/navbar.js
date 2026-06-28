
export const navbar = {
    navbarWrapper: "fixed top-0 left-0 w-full flex items-center justify-between bg-white px-4 sm:px-6 py-3 shadow-sm border-b border-gray-100 z-[999]",
    hamburgerWraper: "flex items-center gap-3 ",
    hamburger: "md:hidden p-1 text-gray-600 hover:bg-gray-100 rounded-lg transition",
    hamburgerIcon: "text-2xl cursor-pointer",
    logo: "h-7 sm:h-8 w-auto cursor-pointer",
    logoText: "text-xl font-bold text-blue-600 hidden sm:block cursor-pointer",
    rightSectin: "flex items-center gap-2 sm:gap-4",
    notificationBell: "relative cursor-pointer p-2 text-gray-600 hover:text-blue-600 rounded-full hover:bg-gray-100 transition",
    notificationsIcon: "text-xl sm:text-2xl",
    notificationBadge: "absolute top-2 right-2 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-red-500",
    
    // PROFILE DROPDOWN 
    profileDropDown: "flex items-center gap-1 sm:gap-2 cursor-pointer border-l pl-2 sm:pl-4 relative select-none",
    profileImage: "h-7 w-7 sm:h-8 sm:w-8 rounded-full border border-gray-200",
    profileBigScWrapper: "hidden lg:block text-left",
    profileName: "text-xs font-semibold text-gray-800 leading-none",
    profileRole: "text-[10px] text-gray-500 mt-0.5",
    profileIcon: "text-gray-400 text-xs sm:text-sm",
    myProfile: "absolute right-[-10px] sm:right-0 top-12 w-48 bg-white border border-gray-100 rounded-xl shadow-xl py-2 z-[999] animate-in fade-in slide-in-from-top-2 duration-150",
    
    // LINKS & BUTTONS 
    profileTitle: "w-full text-left block px-5 py-3 sm:px-4 sm:py-2 text-base sm:text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition cursor-pointer",
    setting: "w-full text-left block px-5 py-3 sm:px-4 sm:py-2 text-base sm:text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition cursor-pointer",
    hrTag: "my-1 border-gray-100",
    logOutButton: "w-full text-left block px-5 py-3 sm:px-4 sm:py-2 text-base sm:text-sm text-red-600 hover:bg-red-50 font-bold sm:font-semibold transition cursor-pointer",

    // LEFT SLIDE HAMBURGER DRAWER 
    drawerOverlay: "fixed inset-0 bg-black/40 z-[9999] backdrop-blur-sm transition-opacity duration-300 md:hidden",
    drawerContent: "fixed top-0 left-0 bottom-0 w-[280px] bg-white shadow-2xl z-[10000] p-6 flex flex-col justify-between transition-transform duration-300 transform md:hidden",
    drawerHeader: "flex items-center justify-between border-b pb-4 mb-6"
};