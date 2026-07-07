// src/components/Income.jsx
import React, { useState, useEffect } from 'react';
import { IonIcon } from '@ionic/react';
import {
  calendarOutline,
  pieChartOutline,
  refreshOutline,
  timeOutline,
  logoUsd,
  trendingUpOutline
} from 'ionicons/icons';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

import Navbar from '../components/Navbar';
import { incomeStyles } from '../styles/style'; // Imported style dictionary
import { getIncome, getUserTransection } from '../api/api';
import { Doughnut } from 'react-chartjs-2';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { useNavigate } from 'react-router-dom';

const Income = () => {
  const navigate = useNavigate()
  const [timeframe, setTimeframe] = useState('Monthly');
  const [totalIncome, setTotalIncome] = useState(0);
  const [transection, setTransection] = useState([]);
  const [average, setAverage] = useState(0);
  useDocumentTitle('Income - FinFlow')

  useEffect(() => {

    const getIncomeData = async () => {
      try {
        const result = await getIncome();
        if (result.data.success) {
          setTransection(result.data.incomes);
        }

        const totalIncomeResult = await getUserTransection();
        if (totalIncomeResult.data.success) {
          setTotalIncome(totalIncomeResult.data.data.monthlyIncome);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    getIncomeData();
  }, []);

  const uniqueData =
    Object.values(
      transection.reduce((acc, item) => {
        if (!acc[item.category]) {
          acc[item.category] = { ...item };
        } else {
          acc[item.category].amount += item.amount;
        }
        return acc;
      }, {})
    );


  useEffect(() => {
    const totalIncomeSum = transection.reduce((sum, item) => {
      return sum + Number(item.amount);
    }, 0);

    const uniqueMonths = new Set(
      transection
        .filter(item => item.date)
        .map(item => {
          const d = new Date(item.date);
          return `${d.getFullYear()}-${d.getMonth()}`;
        })
    );

    const numberOfMonthsDynamic = uniqueMonths.size;

    const monthlyAverage = numberOfMonthsDynamic > 0
      ? (totalIncomeSum / numberOfMonthsDynamic)
      : 0;
    setAverage(monthlyAverage);
  }, [transection]);

  const incomeChart = {
    labels: uniqueData.length === 0
      ? ['No Data']
      : uniqueData.map(item => item.title || item.category || 'Income'),
    datasets: [{
      label: 'Income',
      data: transection.length === 0 ? [0] : transection.map(item => Number(item.amount)),
      backgroundColor: '#10b981',
      borderRadius: 3,
      barThickness: 30
    }]
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '60%',
    radius: '80%',
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          color: '#000000',
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

  return (
    <div className={incomeStyles.pageWrapper}>
      <Navbar />
      <div className={incomeStyles.container}>

        {/* 1. TOP HEADER SECTION */}
        <div className={incomeStyles.headerWrapper}>
          <div>
            <h1 className={incomeStyles.title}>Income Overview</h1>
            <p className={incomeStyles.subtitle}>Track and manage your sources of income.</p>
          </div>

          <div className={incomeStyles.actionContainer}>
            {/* Timeframe Filters */}
            <div className={incomeStyles.tabWrapper}>
              {['Daily', 'Weekly', 'Monthly', 'Yearly'].map((type) => (
                <button
                  key={type}
                  onClick={() => setTimeframe(type)}
                  className={timeframe === type ? incomeStyles.tabBtnActive : incomeStyles.tabBtnInactive}
                >
                  {type}
                </button>
              ))}
            </div>

            <button className={incomeStyles.addBtnIncome} onClick={() => navigate('/addincome')}>
              Add Income
            </button>
          </div>
        </div>

        {/* 2. STATS OVERVIEW CARDS */}
        <div className={incomeStyles.statsGrid}>
          {/* Total Income Card */}
          <div className={incomeStyles.card}>
            <div>
              <p className={incomeStyles.cardTitle}>Total Income</p>
              <h3 className={incomeStyles.cardValue}>${totalIncome}</h3>
              <p className={incomeStyles.cardSubtext}>
                <IonIcon icon={calendarOutline} /> {timeframe} Data
              </p>
            </div>
            <div className={incomeStyles.iconWrapperGreen}>
              <IonIcon icon={logoUsd} />
            </div>
          </div>

          {/* Average Income Card */}
          <div className={incomeStyles.card}>
            <div>
              <p className={incomeStyles.cardTitle}>Average Income</p>
              <h3 className={incomeStyles.cardValue}>${Number(average).toFixed(2)}</h3>
              <p className={incomeStyles.cardSubtext}>
                <IonIcon icon={calendarOutline} /> {timeframe} Data
              </p>
            </div>
            <div className={incomeStyles.iconWrapperBlue}>
              <IonIcon icon={logoUsd} />
            </div>
          </div>

          {/* Total Transactions Card */}
          <div className={incomeStyles.card}>
            <div>
              <p className={incomeStyles.cardTitle}>Transactions Count</p>
              <h3 className={incomeStyles.cardValue}>{transection.length}</h3>
              <p className={incomeStyles.cardSubtext}>
                <IonIcon icon={calendarOutline} /> {timeframe} Data
              </p>
            </div>
            <div className={incomeStyles.iconWrapperPurple}>
              <IonIcon icon={trendingUpOutline} />
            </div>
          </div>
        </div>

        {/* RECENT TRANSACTIONS & CATEGORY DETAILS */}
        <div className={incomeStyles.bottomGrid}>

          {/* Recent Transactions   */}
          <div className={incomeStyles.panelLarge}>
            {/* Header Container */}
            <div className={incomeStyles.panelHeader}>
              <div className="flex items-center gap-2">
                <IonIcon icon={timeOutline} className={incomeStyles.panelTitleContainer} />
                <span className={incomeStyles.panelTitleText}>Recent Transactions</span>
              </div>
              <button className={incomeStyles.panelRefreshBtn} onClick={() => window.location.reload()}>
                <IonIcon icon={refreshOutline} />
              </button>
            </div>

            {/* Body Content Container */}
            <div className={incomeStyles.listContentBody}>
              {transection.length === 0 ? (
                <div className={incomeStyles.emptyStateContainer}>
                  <IonIcon icon={logoUsd} className="text-3xl text-gray-400 animate-pulse" />
                  <p className={incomeStyles.emptyStateText}>No income transactions found.</p>
                </div>
              ) : (
                <div className={incomeStyles.listWrapper}>
                  {transection.slice().reverse().map((item, index) => (
                    <div key={item._id || index} className={incomeStyles.listItemRow}>
                      <div className={incomeStyles.itemLeftBlock}>
                        <span className={incomeStyles.itemTitle}>
                          {item.category || item.description || 'Income Item'}
                        </span>
                      </div>
                      <span className={incomeStyles.itemAmountIncome}>
                        +${Number(item.amount || 0).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Income Category/Chart Panel */}
          <div className={incomeStyles.panelSmall}>
            {/* Panel Header */}
            <div className={incomeStyles.panelHeader}>
              <div className="flex items-center gap-2">
                <IonIcon icon={pieChartOutline} className="text-blue-500" />
                <span className="font-bold text-sm text-black">Income by Category</span>
              </div>
            </div>

            {/* Chart Sandbox Wrapper */}
            <div className={incomeStyles.chartPlaceholder}>
              <Doughnut data={incomeChart} options={doughnutOptions} />
            </div>

            {/* Footer Summary Row */}
            <div className={incomeStyles.chartFooterRow}>
              <div>
                <p className={incomeStyles.footerLabel}>Total Income</p>
                <p className={incomeStyles.footerValueIncome}>${totalIncome}</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Income;
