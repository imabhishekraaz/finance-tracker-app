// src/components/Income.jsx
import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import {
  alertCircleOutline,
  calendarOutline,
  pieChartOutline,
  refreshOutline,
  timeOutline,
  logoUsd,
  trendingUpOutline
} from 'ionicons/icons';

import { incomeStyles } from '../styles/style';
import Navbar from '../components/Navbar';
import { useEffect } from 'react';
import { getIncome } from '../api/api';
import { getUserTransection } from '../api/api';
import { Doughnut } from 'react-chartjs-2';

const Income = () => {
  const [timeframe, setTimeframe] = useState('Monthly');
  const [totalIncome, setTotalIncome] = useState(0);
  const [transection, setTransection] = useState([]);
  const [average, setAverage] = useState(0);




  useEffect(() => {
    const getIncomeData = async () => {
      try {
        const result = await getIncome();
        if (result.data.success) {
          setTransection(() => result.data.incomes)
        }

        const totalIncomeResult = await getUserTransection();
        if (totalIncomeResult.data.success) {
          setTotalIncome(totalIncomeResult.data.data.monthlyIncome)
        }
      } catch (error) {
        console.log(error.message)
      }
    };

    const totalIncomeSum = transection.reduce((sum, item) => {
      return sum + Number(item.amount)
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

    getIncomeData();
  }, []);

  const incomeChart = {
    labels: transection.length === 0
      ? ['No Data']
      : transection.map(item => item.title || item.category || 'Income'),
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
    radius : '80%',
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



  return (
    <div className={incomeStyles.pageWrapper}>
      <div className={incomeStyles.container}>
        <Navbar />

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

            <button className={incomeStyles.addBtn}>Add Income</button>
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
              <h3 className={incomeStyles.cardValue}>${average}</h3>
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

        {/* 3. RECENT TRANSACTIONS & CATEGORY DETAILS */}
        <div className={incomeStyles.bottomGrid}>

          {/* Recent Transactions Panel */}
          <div className={incomeStyles.panelLarge}>
            <div>
              <div className={incomeStyles.panelHeader}>
                <div className={incomeStyles.panelTitleContainer}>
                  <IonIcon icon={timeOutline} />
                  <span className={incomeStyles.panelTitleText}>Recent Transactions</span>
                </div>
                <button className={incomeStyles.panelRefreshBtn}>
                  <IonIcon icon={refreshOutline} />
                </button>
              </div>
            </div>

            {/* Empty Table State */}
            {transection.length === 0 ? (
              <div>
                <IonIcon icon={logoUsd} className="text-3xl text-gray-200" />
                <p>No income transactions found.</p>
              </div>
            ) : (
              <div className="p-4 space-y-2 flex flex-col ">
                {transection.map((item, index) => (
                  <div key={index} className="flex justify-between border-b border-gray-700 py-1">
                    <span className="text-black">{item.category || 'Income Item'}</span>
                    <span className="text-green-400 font-bold">+${item.amount}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Income Category/Chart Panel */}
          <div className={incomeStyles.panelSmall}>
            <div className={incomeStyles.panelHeader}>
              <div className={incomeStyles.panelTitleContainer}>
                <IonIcon icon={pieChartOutline} className="text-blue-500" />
                <span className={incomeStyles.panelTitleText}>Income by Category</span>
              </div>
            </div>

            {/* Chart.js Sandbox Grid */}
            <div className={incomeStyles.chartPlaceholder}>
              <Doughnut data={incomeChart} options={doughnutOptions} />
            </div>

            {/* Footer Summary Blocks */}
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