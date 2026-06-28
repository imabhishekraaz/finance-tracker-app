
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { IonIcon } from '@ionic/react';
import {
  alertCircleOutline,
  cellularOutline,
  reloadOutline,
  syncOutline,
  trendingUpOutline,
  logoUsd
} from 'ionicons/icons';

import { dashboardStyles } from '../styles/style';
import { getUserTransection } from '../api/api';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, ArcElement, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [incomeList, setIncomeList] = useState([]);
  const [expenseList, setExpenseList] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const result = await getUserTransection();

      if (result.data.success && result.data) {
        setDashboardData(result.data.data);
        console.log("Dashboard Payload:", result.data);

        const transactions = result.data.data.recentTransactions || [];
        const incomes = transactions.filter(item => item.type === 'income');
        const expenses = transactions.filter(item => item.type === 'expense');

        setIncomeList(incomes);
        setExpenseList(expenses);
      } else {
        console.error("Failed to load profile:", result.data.message);
      }
    };

    fetchUserData();
  }, []);
  // 1. Income Chart Configuration
  const incomeChart = {
    labels: incomeList.length === 0
      ? ['No Data']
      : incomeList.map(item => item.title || item.category || 'Income'),
    datasets: [{
      label: 'Income',
      data: incomeList.length === 0 ? [0] : incomeList.map(item => Number(item.amount)),
      backgroundColor: '#10b981',
      borderRadius: 6,
      barThickness: 30
    }]
  };

  const expenseChart = {
    labels: expenseList.length === 0
      ? ['No Data']
      : expenseList.map(item => item.category || 'Expense'),
    datasets: [{
      label: 'Expenses',
      data: expenseList.length === 0 ? [0] : expenseList.map(item => Number(item.amount)),
      backgroundColor: '#f43f5e',
      borderRadius: 6,
      barThickness: 30
    }]
  };

  // 1. Doughnut Chart Data
  const savingsChart = {
    labels: ['Savings', 'Spent'],
    datasets: [
      {
        label: 'Financial Breakdown',
        data: [
          Number(dashboardData?.savings || 0),
          Number(dashboardData?.monthlyExpense || 0)
        ],
        backgroundColor: [
          '#3b82f6',
          '#ef4444'
        ],
        borderColor: '#111827',
        borderWidth: 0,
        hoverOffset: 4
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '60%',
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          color: '#94a3b8',
          font: { size: 12 },
          boxWidth: 12,
          padding: 10
        }
      },
      tooltip: {
        callbacks: {
          label: (context) => ` $${context.raw}`
        }
      }
    }
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: 'rgba(75, 85, 99, 0.2)' },
        ticks: { color: '#94a3b8' }
      },
      x: {
        grid: { display: false },
        ticks: { color: '#94a3b8' }
      }
    }
  };


  if (!dashboardData) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-gray-900 text-white">
        <p className="text-lg font-medium animate-pulse">Loading financial profile...</p>
      </div>
    );
  }

  return (
    <>
      <Navbar data={dashboardData} />
      <div className={dashboardStyles.pageWrapper}>
        <div className={dashboardStyles.container}>

          {/* Header Greeting */}
          <div className={dashboardStyles.headerWrapper}>
            <h1 className={dashboardStyles.title}>Dashboard</h1>
            <p className={dashboardStyles.subtitle}>Welcome back to your financials.</p>
          </div>

          {/* 1. STATS CARDS GRID */}
          <div className={dashboardStyles.statsGrid}>

            {/* Total Balance Card */}
            <div className={dashboardStyles.card}>
              <div>
                <p className={dashboardStyles.cardTitle}>Total Balance</p>
                <h3 className={dashboardStyles.cardValue}>${dashboardData.savings || 0}</h3>
                <p className={dashboardStyles.cardSubtextGreen}>
                  <span className="font-bold">+0%</span> this month
                </p>
              </div>
              <div className={dashboardStyles.iconWrapperBlue}>
                <IonIcon icon={cellularOutline} className={dashboardStyles.iconSize} />
              </div>
            </div>

            {/* Monthly Income Card */}
            <div className={dashboardStyles.card}>
              <div>
                <p className={dashboardStyles.cardTitle}>Monthly Income</p>
                <h3 className={dashboardStyles.cardValue}>${dashboardData.monthlyIncome || 0}</h3>
                <p className={dashboardStyles.cardSubtextGreen}>
                  <span className="font-bold">+0%</span> this month
                </p>
              </div>
              <div className={dashboardStyles.iconWrapperGreen}>
                <IonIcon icon={cellularOutline} className={dashboardStyles.iconSize} />
              </div>
            </div>

            {/* Monthly Expense Card */}
            <div className={dashboardStyles.card}>
              <div>
                <p className={dashboardStyles.cardTitle}>Monthly Expense</p>
                <h3 className={dashboardStyles.cardValue}>${dashboardData.monthlyExpense || 0}</h3>
                <p className={dashboardStyles.cardSubtextRed}>
                  <span className="font-bold">+0%</span> this month
                </p>
              </div>
              <div className={dashboardStyles.iconWrapperRed}>
                <IonIcon icon={cellularOutline} className={dashboardStyles.iconSize} />
              </div>
            </div>

            {/* Saving Rate Card */}
            <div className={dashboardStyles.card}>
              <div>
                <p className={dashboardStyles.cardTitle}>Saving Rate</p>
                <h3 className={dashboardStyles.cardValue}>{dashboardData.savingsRate || 0}%</h3>
                <p className={dashboardStyles.cardSubtextBlue}>
                  <span className="font-bold">+0%</span> this month
                </p>
              </div>
              <div className={dashboardStyles.iconWrapperPurple}>
                <IonIcon icon={cellularOutline} className={dashboardStyles.iconSize} />
              </div>
            </div>

          </div>

          {/* 2. CHARTS SECTION */}
          <div className={dashboardStyles.chartsGrid}>
            {/* Income Chart Card */}
            <div className={dashboardStyles.chartCard}>
              <div>
                <p className={dashboardStyles.chartTitle}>Income Overview</p>
                <h4 className={dashboardStyles.chartValue}>
                  ${dashboardData.monthlyIncome || 0}
                </h4>
              </div>
              <div className={dashboardStyles.chartPlaceholder}>
                <div className="h-48 w-full"> {/* Height and width sets the boundaries */}
                  <Bar data={incomeChart} options={chartOptions} />
                </div>
              </div>
              <p className={dashboardStyles.chartFooterText}>This Month's summary</p>
            </div>

            {/* Spent Chart Card */}
            <div className={dashboardStyles.chartCard}>
              <div>
                <p className={dashboardStyles.chartTitle}>Spent Overview</p>
                <h4 className={dashboardStyles.chartValue}>
                  ${dashboardData.monthlyExpense || 0}
                </h4>
              </div>
              <div className={dashboardStyles.chartPlaceholder}>
                <div className="h-48 w-full">
                  <Bar data={expenseChart} options={chartOptions} />
                </div>
              </div>
              <p className={dashboardStyles.chartFooterText}>This Month's summary</p>
            </div>

            {/* Saving Chart Card */}
            <div className={dashboardStyles.chartCard}>
              <div>
                <p className={dashboardStyles.chartTitle}>Savings Overview</p>
                <h4 className={dashboardStyles.chartValue}>
                  ${dashboardData.savings || 0}
                </h4>
              </div>

              <div className={dashboardStyles.chartPlaceholder}>
                <div className="h-48 w-full relative flex items-center justify-center">
                  <Doughnut data={savingsChart} options={doughnutOptions} />

                  <div className="absolute flex flex-col items-center justify-center pointer-events-none mb-6">
                    <span className="text-2xl font-bold text-white font-mono">
                      {dashboardData.savingsRate || 0}%
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-gray-500 font-medium">
                      Saved
                    </span>
                  </div>
                </div>
              </div>

              <p className={dashboardStyles.chartFooterText}>This Month's summary</p>
            </div>
          </div>

          {/* 3. RECENT HISTORY TABLES SECTION */}
          <div className={dashboardStyles.historyGrid}>

            {/* Recent Income Block */}
            <div className={dashboardStyles.historyCard}>
              <div className={dashboardStyles.cardHeader}>
                <div className={dashboardStyles.headerTitleContainer}>
                  <IonIcon icon={trendingUpOutline} className="text-green-500 text-lg" />
                  <span className={dashboardStyles.headerTitleText}>Recent Income</span>
                </div>
                <span className={dashboardStyles.badge}>{incomeList.length} records</span>
              </div>

              {incomeList.length === 0 ? (
                <div className={dashboardStyles.emptyStateContainer}>
                  <IonIcon icon={logoUsd} className="text-3xl text-gray-200" />
                  <p className={dashboardStyles.emptyStateText}>No income transactions found.</p>
                </div>
              ) : (
                <div className="p-4 space-y-2">
                  {incomeList.map((item, index) => (
                    <div key={index} className="flex justify-between border-b border-gray-700 py-1">
                      <span className="text-black">{item.category || 'Income Item'}</span>
                      <span className="text-green-400 font-bold">+${item.amount}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Recent Expense Block */}
            <div className={dashboardStyles.historyCard}>
              <div className={dashboardStyles.cardHeader}>
                <div className={dashboardStyles.headerTitleContainer}>
                  <IonIcon icon={trendingUpOutline} className="text-red-500 text-lg rotate-180" />
                  <span className={dashboardStyles.headerTitleText}>Recent Expenses</span>
                </div>
                <span className={dashboardStyles.badge}>{expenseList.length} records</span>
              </div>

              {expenseList.length === 0 ? (
                <div className={dashboardStyles.emptyStateContainer}>
                  <IonIcon icon={logoUsd} className="text-3xl text-gray-200" />
                  <p className={dashboardStyles.emptyStateText}>No expense transactions found.</p>
                </div>
              ) : (
                <div className="p-4 space-y-2">
                  {expenseList.map((item, index) => (
                    <div key={index} className="flex justify-between border-b border-gray-700 py-1">
                      <span className="text-red-500">{item.category || 'Expense Item'}</span>
                      <span className="text-red-500 font-bold">-${item.amount}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>

          {/* 4. FULL TRANSACTION LEDGER BLOCK */}
          <div className={dashboardStyles.ledgerCard}>
            <div className={dashboardStyles.ledgerHeader}>
              <div className={dashboardStyles.headerTitleContainer}>
                <IonIcon icon={trendingUpOutline} className="text-blue-500 text-lg" />
                <span className={dashboardStyles.headerTitleText}>All Recent Transactions</span>
              </div>
            </div>
            {(incomeList.length === 0 && expenseList.length === 0) ? (
              <div className={dashboardStyles.emptyStateContainer}>
                <IonIcon icon={logoUsd} className="text-3xl text-gray-200" />
                <p className={dashboardStyles.emptyStateText}>No ledger entries present for this month.</p>
              </div>
            ) : (
              <div className={dashboardStyles.tableWrapper}>
                <table className={dashboardStyles.tableElement}>
                  <thead className={dashboardStyles.tableHeader}>
                    <tr>
                      <th className={dashboardStyles.tableHeaderCell}>Type</th>
                      <th className={dashboardStyles.tableHeaderCell}>Description/Category</th>
                      <th className={dashboardStyles.tableHeaderCell}>Date</th>
                      <th className={`${dashboardStyles.tableHeaderCell} text-right`}>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Merge income and expense arrays, then sort them by date descending */}
                    {[...incomeList, ...expenseList]
                      .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0))
                      .map((item, index) => {
                        const isIncome = item.type === 'income';
                        return (
                          <tr key={item._id || index} className={dashboardStyles.tableRow}>
                            {/* Type Indicator Column */}
                            <td className="px-4 py-3 whitespace-nowrap">
                              <span className={`px-2 py-0.5 text-xs font-medium rounded uppercase tracking-wider ${isIncome ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-rose-950 text-rose-400 border border-rose-800'
                                }`}>
                                {item.type}
                              </span>
                            </td>
                            {/* Description Column */}
                            <td className={dashboardStyles.tableCellName}>
                              {item.title || item.category || item.description || 'Transaction'}
                            </td>
                            {/* Date Column */}
                            <td className={dashboardStyles.tableCellDate}>
                              {item.date ? new Date(item.date).toLocaleDateString() : 'N/A'}
                            </td>
                            {/* Amount Column */}
                            <td className={`${dashboardStyles.tableCellAmount} ${isIncome ? dashboardStyles.incomeText : dashboardStyles.expenseText}`}>
                              {isIncome ? '+' : '-'}${Number(item.amount).toFixed(2)}
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            )}

            {/* Sync Status Bottom Element */}
            <div className={dashboardStyles.syncStrip}>
              <div className={dashboardStyles.syncTextContainer}>
                <IonIcon icon={syncOutline} className={dashboardStyles.syncIconAnimated} />
                <span>Synchronized with central database server.</span>
              </div>
              <button className={dashboardStyles.refreshBtn} onClick={() => window.location.reload()}>
                <IonIcon icon={reloadOutline} className="text-base" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Dashboard;