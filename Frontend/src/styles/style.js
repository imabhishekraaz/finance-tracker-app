

export const expenseStyles = {
    pageWrapper: "min-h-screen pt-13 bg-gray-50 text-gray-800 pb-10",
    container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6",

    // Header Section
    headerWrapper: "flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-200 pb-5 gap-4 mb-6",
    title: "text-2xl sm:text-3xl font-bold tracking-tight text-gray-900",
    subtitle: "text-sm text-gray-500 mt-1",
    actionContainer: "flex flex-wrap items-center gap-3",

    // Filter Tabs
    tabWrapper: "bg-gray-100 p-1 rounded-xl flex gap-1",
    tabBtnActive: "px-3 py-1.5 rounded-lg text-xs font-semibold bg-white text-blue-600 shadow-sm transition",
    tabBtnInactive: "px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-500 hover:text-gray-900 transition",
    addBtn: "bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-blue-700 transition",

    // Stats Cards Grid
    statsGrid: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-8",
    card: "bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-start",
    cardTitle: "text-xs font-semibold text-gray-400 uppercase tracking-wider",
    cardValue: "text-2xl font-bold text-gray-900 mt-1",
    cardSubtext: "text-xs text-gray-400 flex items-center gap-1 mt-3",

    // Icons
    iconWrapperRed: "p-2.5 bg-red-50 rounded-xl text-red-600 flex",
    iconWrapperBlue: "p-2.5 bg-blue-50 rounded-xl text-blue-600 flex",
    iconWrapperPurple: "p-2.5 bg-purple-50 rounded-xl text-purple-600 flex",


    // Bottom Grid Section
    bottomGrid: "grid grid-cols-1 lg:grid-cols-3 gap-6",

    // Transactions Panel
    panelLarge: "lg:col-span-2 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between min-h-[500px]",
    panelHeader: "flex items-center justify-between bg-white pb-3 border-b border-black",
    panelTitleContainer: "flex items-center gap-2",
    panelTitleText: "font-bold text-sm text-black",
    panelRefreshBtn: "text-black hover:text-blue-500 transition p-1 flex",

    alertRibbon: "flex items-center gap-2 bg-white border border-blue-100 text-blue-700 p-3 rounded-xl text-xs font-medium mt-4",
    emptyStateContainer: "flex-1 flex flex-col items-center justify-center py-8 text-gray-400 gap-2",
    emptyStateText: "text-sm",

    // Chart Panel
    panelSmall: "bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between min-h-[350px]",
    chartPlaceholder: "flex-1 flex items-center justify-center border border-dashed border-gray-200 rounded-xl my-4 text-xs text-gray-400 min-h-[160px]",

    chartFooterRow: "gap-2 border-t border-gray-100 pt-3 text-center",
    footerLabel: "text-[10px] text-gray-400 uppercase font-bold tracking-wider",
    footerValueIncome: "text-sm font-bold text-green-600",
    footerValueExpense: "text-sm font-bold text-red-600",



    emptyStateContainer: "flex flex-col items-center justify-center flex-1 text-center py-12 w-full",
    emptyStateText: "text-black text-sm mt-2",
    listWrapper: "w-full flex-1 flex flex-col justify-start space-y-1",
    listItemRow: "flex justify-between items-center border-b border-gray-800/60 py-3 w-full hover:bg-gray-800/20 transition-all px-1",
    itemLeftBlock: "flex items-center gap-2.5",
    itemTitle: "text-black text-sm font-medium",
    itemAmount: "text-red-600 font-bold text-sm"
};


// income.jsx

export const incomeStyles = {
    pageWrapper: "min-h-screen pt-13 bg-gray-50 text-gray-800 pb-10",
    container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6",

    // Header Section
    headerWrapper: "flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-200 pb-5 gap-4 mb-6",
    title: "text-2xl sm:text-3xl font-bold tracking-tight text-gray-900",
    subtitle: "text-sm text-gray-500 mt-1",
    actionContainer: "flex flex-wrap items-center gap-3",

    // Filter Tabs
    tabWrapper: "bg-gray-100 p-1 rounded-xl flex gap-1",
    tabBtnActive: "px-3 py-1.5 rounded-lg text-xs font-semibold bg-white text-blue-600 shadow-sm transition",
    tabBtnInactive: "px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-500 hover:text-gray-900 transition",
    addBtn: "bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-blue-700 transition",

    // Stats Cards Grid
    statsGrid: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-8",
    card: "bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-start",
    cardTitle: "text-xs font-semibold text-gray-400 uppercase tracking-wider",
    cardValue: "text-2xl font-bold text-gray-900 mt-1",
    cardSubtext: "text-xs text-gray-400 flex items-center gap-1 mt-3",

    // Icon Wrappers
    iconWrapperGreen: "p-2.5 bg-green-50 rounded-xl text-green-600 flex",
    iconWrapperBlue: "p-2.5 bg-blue-50 rounded-xl text-blue-600 flex",
    iconWrapperPurple: "p-2.5 bg-purple-50 rounded-xl text-purple-600 flex",

    // Bottom Section Grid
    bottomGrid: "grid grid-cols-1 lg:grid-cols-3 gap-6",


    alertRibbon: "flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 p-3 rounded-xl text-xs font-medium mt-4",
    emptyStateContainer: "flex-1 flex flex-col items-center justify-center py-8 text-gray-400 gap-2",
    emptyStateText: "text-sm",

    // Income Category Panel
    panelSmall: "bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between min-h-[350px]",
    chartPlaceholder: "flex-1 flex items-center justify-center border border-dashed border-gray-200 rounded-xl my-4 text-xs text-gray-400 min-h-[160px]",

    chartFooterRow: "grid grid-cols-2 gap-2 border-t border-gray-100 pt-3 text-center",
    footerLabel: "text-[10px] text-gray-400 uppercase font-bold tracking-wider",
    footerValueIncome: "text-sm font-bold text-green-600",
    footerValueExpense: "text-sm font-bold text-red-600"
};


// Dashboard.jsx

export const dashboardStyles = {
    pageWrapper: "min-h-screen bg-gray-50 pt-13 text-gray-800 pb-10",
    container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6",

    // Header Section
    headerWrapper: "mb-6",
    title: "text-2xl sm:text-3xl font-bold tracking-tight text-gray-900",
    subtitle: "text-sm text-gray-500 mt-1",

    // Stats Cards Grid
    statsGrid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8",
    card: "bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-start",
    cardTitle: "text-xs font-semibold text-gray-400 uppercase tracking-wider",
    cardValue: "text-2xl font-bold text-gray-900 mt-1",
    cardSubtextGreen: "text-xs text-green-500 font-medium mt-2",
    cardSubtextRed: "text-xs text-red-500 font-medium mt-2",
    cardSubtextBlue: "text-xs text-blue-500 font-medium mt-2",

    // Icon Wrappers
    iconWrapperBlue: "p-2 bg-blue-50 rounded-xl text-blue-600 flex",
    iconWrapperGreen: "p-2 bg-green-50 rounded-xl text-green-600 flex",
    iconWrapperRed: "p-2 bg-red-50 rounded-xl text-red-600 flex",
    iconWrapperPurple: "p-2 bg-purple-50 rounded-xl text-purple-600 flex",
    iconSize: "text-xl",

    // Charts Grid
    chartsGrid: "grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8",
    chartCard: "bg-white p-5 rounded-2xl border border-gray-100 shadow-sm min-h-[260px] flex flex-col justify-between",
    chartTitle: "text-sm font-semibold text-gray-500",
    chartValue: "text-xl font-bold mt-1",
    chartValueSubtextGreen: "text-xs font-medium text-green-500",
    chartValueSubtextRed: "text-xs font-medium text-red-500",
    chartValueSubtextBlue: "text-xs font-medium text-blue-500",
    chartPlaceholder: "flex-1 flex items-center justify-center border border-dashed border-gray-200 rounded-xl my-3 text-xs text-gray-400",
    chartFooterText: "text-xs text-gray-400",

    // Recent History Grid
    historyGrid: "grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8",
    historyCard: "bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col",
    cardHeader: "flex justify-between items-center pb-3 border-b border-gray-50",
    headerTitleContainer: "flex items-center gap-2",
    headerTitleText: "font-semibold text-sm",
    headerSubtext: "text-xs text-gray-400 font-normal",
    badge: "text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full font-medium",
    emptyStateContainer: "flex-1 flex flex-col items-center justify-center py-10 text-gray-400 gap-2",
    emptyStateText: "text-sm",

    // Full Ledger Block
    ledgerCard: "bg-white p-5 rounded-2xl border border-gray-100 shadow-sm",
    ledgerHeader: "flex justify-between items-center pb-4 border-b border-gray-50 mb-4",
    alertRibbon: "flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 p-3 rounded-xl text-xs font-medium mb-6",
    alertIcon: "text-base shrink-0",

    // Footer Sync Strip
    syncStrip: "flex items-center justify-between text-xs text-gray-400 bg-white p-3 rounded-xl",
    syncTextContainer: "flex items-center gap-2",
    syncIconAnimated: "animate-spin text-gray-300",
    refreshBtn: "hover:text-blue-500 transition flex items-center p-1",



    // Ledger Card Main Structure
    ledgerCard: "bg-white border border-gray-800 rounded-xl shadow-xl overflow-hidden my-6",
    ledgerHeader: "flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-white ",
    headerTitleContainer: "flex items-center gap-2",
    headerTitleText: "text-lg font-semibold text-black tracking-wide",
    headerSubtext: "text-xs text-gray-400 font-normal ml-1",

    // Empty State Fallback
    emptyStateContainer: "flex flex-col items-center justify-center p-12 text-center bg-white ",
    emptyStateText: "mt-2 text-sm text-black font-medium",

    // Core Table Containers
    tableWrapper: "overflow-x-auto w-full custom-scrollbar",
    tableElement: "min-w-full text-sm text-left text-gray-300 table-auto border-collapse",
    tableHeader: "text-xs uppercase bg-white text-black border-b border-gray-800 tracking-wider font-semibold select-none",
    tableHeaderCell: "px-6 py-3.5 text-left font-semibold",
    tableRow: "border-b border-gray-800/60 hover:bg-gray-800/40 transition-colors duration-150 ease-in-out",

    // Specific Data Cells
    tableCellName: "px-6 py-4 font-medium text-black whitespace-nowrap max-w-xs truncate",
    tableCellDate: "px-6 py-4 text-black whitespace-nowrap font-mono text-xs",
    tableCellAmount: "px-6 py-4 text-right font-semibold whitespace-nowrap font-mono",

    // Global Dynamic Amount Text Colors
    incomeText: "text-emerald-400",
    expenseText: "text-rose-400",

    // Sync / Action Footer Strip
    syncStrip: "flex items-center justify-between px-6 py-3 bg-gray-900 border-t border-gray-800/80 text-xs text-gray-400",
    syncTextContainer: "flex items-center gap-2 text-gray-400 font-medium",
    syncIconAnimated: "text-blue-400 animate-spin [animation-duration:3s] text-sm",
    refreshBtn: "p-2 rounded-lg bg-gray-800 hover:bg-gray-700 active:scale-95 text-gray-300 hover:text-white border border-gray-700/50 transition-all cursor-pointer"
};

// Setting.jsx

export const settingStyle = {
    arrowBack: "pl-5 pt-5 text-3xl cursor-pointer text-gray-600 ",
    settingText: "pl-5 text-xl  flex justify-center"
};

// Profile.jsx
export const ProfilePage = {
    arrowBack: "pl-5 pt-5 text-3xl cursor-pointer text-gray-600 ",
    settingText: "pl-5 text-xl  flex justify-center"
};

// Notification.jsx
export const NotificationPage = {
    arrowBack: "pl-5 pt-5 text-3xl cursor-pointer text-gray-600 ",
    settingText: "pl-5 text-xl  flex justify-center"
};