import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { lazy, Suspense } from "react";

// Lazy loading components
const Dashboard = lazy(() => import('./pages/Dashboard'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const Signup = lazy(() => import('./pages/Signup'));
const Expense = lazy(() => import('./pages/Expense'));
const Income = lazy(() => import('./pages/Income'));
const Setting = lazy(() => import('./pages/Setting'));
const Profile = lazy(() => import('./pages/Profile'));
const Notification = lazy(() => import('./pages/Notification'));
const AddIncome = lazy(()=> import('./components/AddIncome'));
const AddExpense = lazy(()=> import('./components/AddExpense'))

function App() {


  return (
    <Suspense fallback={<h1 className="w-full h-[100vh] animate-pulse flex justify-center items-center text-2xl">Loading...</h1>}>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/expense" element={<Expense />} />
          <Route path="/income" element={<Income />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<Notification />} />
          <Route path="/addincome" element={<AddIncome  />}/>
          <Route path='/addexpense' element={<AddExpense/>}/>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;