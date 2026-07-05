

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
    panelLarge: "lg:col-span-2 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between h-[500px] lg:max-h-[400px] overflow-y-auto",
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
    // Core Page Wrapper & Layout Main Container
    pageWrapper: "min-h-screen pt-13 bg-gray-50 text-gray-800 pb-10",
    container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 flex flex-col gap-8",

    // 1. Top Header Action Block
    headerWrapper: "flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-200 pb-5 gap-4",
    title: "text-2xl font-bold tracking-tight text-gray-900",
    subtitle: "text-sm text-gray-500 mt-1",
    actionContainer: "flex flex-wrap items-center gap-4 w-full sm:w-auto",

    // Filter Sub-Tabs & Actions Buttons
    tabWrapper: "flex bg-gray-100 p-1 rounded-xl border border-gray-200",
    tabBtnActive: "px-4 py-2 rounded-lg text-xs font-semibold bg-white text-black shadow-sm transition-all",
    tabBtnInactive: "px-4 py-2 rounded-lg text-xs font-semibold text-gray-500 hover:text-black transition-all",
    addBtnIncome: "bg-green-600 hover:bg-green-700 text-white font-medium text-sm px-5 py-2.5 rounded-xl shadow-sm transition w-full sm:w-auto",
    addBtnExpense: "bg-red-600 hover:bg-red-700 text-white font-medium text-sm px-5 py-2.5 rounded-xl shadow-sm transition w-full sm:w-auto",

    // 2. Overview Summary Cards Grid Layout
    statsGrid: "grid grid-cols-1 md:grid-cols-3 gap-6",
    card: "bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-center",
    cardTitle: "text-xs font-semibold text-gray-400 uppercase tracking-wider",
    cardValue: "text-2xl font-bold text-black mt-2",
    cardSubtext: "text-xs text-gray-400 flex items-center gap-1 mt-2",

    // Badge Status Icon Containers
    iconWrapperGreen: "w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-xl text-green-600",
    iconWrapperRed: "w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-xl text-red-600",
    iconWrapperBlue: "w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-xl text-blue-600",
    iconWrapperPurple: "w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-xl text-purple-600",

    // 3. Bottom Dashboard Display Layout
    bottomGrid: "grid grid-cols-1 lg:grid-cols-3 gap-6",
    panelTitleContainer: "flex items-center gap-2",
    panelTitleText: "font-bold text-sm text-black",

    // Feed Log View Panel (Forces content lists up tightly beneath the header)
    panelLarge: "lg:col-span-2 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col min-h-[500px] lg:max-h-[400px] overflow-y-auto",
    panelHeader: "flex items-center justify-between bg-white pb-3 border-b border-black",
    panelRefreshBtn: "text-black hover:text-blue-500 transition p-1 flex",

    // Real-time Activity Feeds list layout properties
    listContentBody: "flex-1 flex flex-col justify-start ",
    listWrapper: "w-full flex flex-col justify-start space-y-1 mt-2",
    listItemRow: "flex justify-between items-center border-b border-gray-800/60 py-3 w-full hover:bg-gray-800/20 transition-all px-1 last:border-0",
    itemLeftBlock: "flex items-center gap-2.5",
    itemTitle: "text-black text-sm font-medium",
    itemAmountIncome: "text-green-600 font-bold text-sm",
    itemAmountExpense: "text-red-600 font-bold text-sm",

    // Empty Sandbox Fallback Intercept Components
    emptyStateContainer: "flex flex-col items-center justify-center flex-1 text-center py-12 w-full gap-2",
    emptyStateText: "text-gray-400 text-sm",

    // 4. Analytical Doughnut Side Panel
    panelSmall: "bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between min-h-[350px]",
    chartPlaceholder: "flex-1 flex items-center justify-center border border-dashed border-gray-200 rounded-xl my-4 text-xs text-gray-400 min-h-[160px] p-2",
    chartFooterRow: "gap-2 border-t border-gray-100 pt-3 text-center",
    footerLabel: "text-[10px] text-gray-400 uppercase font-bold tracking-wider",
    footerValueIncome: "text-sm font-bold text-green-600",
    footerValueExpense: "text-sm font-bold text-red-600",
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
    historyCard: "bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col max-h-[400px] overflow-y-auto",
    cardHeader: "flex justify-between items-center pb-3 border-b border-gray-50",
    headerTitleContainer: "flex items-center gap-2",
    headerTitleText: "font-semibold text-sm",
    headerSubtext: "text-xs text-gray-400 font-normal",
    badge: "text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full font-medium",
    emptyStateContainer: "flex-1 flex flex-col items-center justify-center py-10 text-gray-400 gap-2",
    emptyStateText: "text-sm",

    // // Full Ledger Block
    // ledgerCard: "bg-white p-5 rounded-2xl border border-gray-100 shadow-sm max-h-[400px]",
    // ledgerHeader: "flex justify-between items-center pb-4 border-b border-gray-50 mb-4",
    // alertRibbon: "flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 p-3 rounded-xl text-xs font-medium mb-6",
    // alertIcon: "text-base shrink-0",

    // Footer Sync Strip
    syncStrip: "flex items-center justify-between text-xs text-gray-400 bg-white p-3 rounded-xl",
    syncTextContainer: "flex items-center gap-2",
    syncIconAnimated: "animate-spin text-gray-300",
    refreshBtn: "hover:text-blue-500 transition flex items-center p-1",



    // Ledger Card Main Structure
    ledgerCard: "bg-white border border-gray-800 rounded-xl shadow-xl  my-6",
    ledgerHeader: "flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-white ",
    headerTitleContainer: "flex items-center gap-2",
    headerTitleText: "text-lg font-semibold text-black tracking-wide",
    headerSubtext: "text-xs text-gray-400 font-normal ml-1",

    // Empty State Fallback
    emptyStateContainer: "flex flex-col items-center justify-center p-12 text-center bg-white ",
    emptyStateText: "mt-2 text-sm text-black font-medium",

    // Core Table Containers
    tableWrapper: "overflow-x-auto max-h-[500px] w-full custom-scrollbar",
    tableElement: "min-w-full text-sm text-left text-gray-300  border-collapse",
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
    arrowBack: "pl-5 pt-10 text-3xl cursor-pointer text-gray-600 ",
    settingText: "pl-5 text-xl  flex justify-center"
};

// Profile.jsx
export const ProfilePage = {
    arrowBack: "pl-5 pt-10 text-3xl cursor-pointer text-gray-600 ",
    settingText: "pl-5 text-xl  flex justify-center"
};

// Notification.jsx
export const NotificationPage = {
    arrowBack: "pl-5 pt-10 text-3xl cursor-pointer text-gray-600 ",
    settingText: "pl-5 text-xl  flex justify-center"
};

// Add Income Page
export const addIncomeStyles = {
    modalBackdrop: "fixed inset-0 z-50 flex items-center justify-center bg-gray-900/0 p-0 lg:bg-gray-900/40 lg:p-4 lg:backdrop-blur-sm",
    container: "w-full min-h-screen bg-white p-6 flex flex-col justify-start font-sans lg:min-h-0 lg:max-w-xl lg:rounded-2xl lg:border lg:border-gray-100 lg:p-8 lg:shadow-xl lg:animate-in lg:fade-in lg:zoom-in-95",
    headerWrapper: "mb-6 flex items-center justify-between",
    title: "text-2xl font-bold text-gray-900 tracking-tight",
    subtitle: "text-sm text-gray-500 mt-1",
    closeBtn: "hidden lg:flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer",
    
    form: "flex flex-col gap-5",
    formGroup: "flex flex-col gap-2",
    label: "text-sm font-semibold text-gray-700",
    input: "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 font-medium transition-colors focus:outline-none focus:border-blue-500 focus:bg-white",
    select: "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-blue-500 focus:bg-white cursor-pointer",
    textarea: "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white resize-none",
    submitBtn: "w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl shadow-sm mt-2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
};


// Add Expense Page
export const AddExpenseStyles = {
    modalBackdrop: "fixed inset-0 z-50 flex items-center justify-center bg-gray-900/0 p-0 lg:bg-gray-900/40 lg:p-4 lg:backdrop-blur-sm",
    container: "w-full min-h-screen bg-white p-6 flex flex-col justify-start font-sans lg:min-h-0 lg:max-w-xl lg:rounded-2xl lg:border lg:border-gray-100 lg:p-8 lg:shadow-xl lg:animate-in lg:fade-in lg:zoom-in-95",
    headerWrapper: "mb-6 flex items-center justify-between",
    title: "text-2xl font-bold text-gray-900 tracking-tight",
    subtitle: "text-sm text-gray-500 mt-1",
    closeBtn: "hidden lg:flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer",
    
    form: "flex flex-col gap-5",
    formGroup: "flex flex-col gap-2",
    label: "text-sm font-semibold text-gray-700",
    input: "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 font-medium transition-colors focus:outline-none focus:border-blue-500 focus:bg-white",
    select: "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-blue-500 focus:bg-white cursor-pointer",
    textarea: "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white resize-none",
    submitBtn: "w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl shadow-sm mt-2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
};