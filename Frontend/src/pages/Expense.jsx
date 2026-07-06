import React, { useEffect, useState } from 'react';
import { IonIcon } from '@ionic/react';
import {
  alertCircleOutline,
  calendarOutline,
  chevronDownCircleOutline,
  pieChartOutline,
  refreshOutline,
  timeOutline,
  logoUsd,
  listOutline
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

import { expenseStyles } from '../styles/style';
import Navbar from '../components/Navbar';
import { getExpense, getUserTransection } from '../api/api';
import { Doughnut } from 'react-chartjs-2';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { useNavigate } from 'react-router-dom';

const Expense = () => {

  const [expenseList, setExpenseList] = useState([]);
  const [timeframe, setTimeframe] = useState('Monthly');
  const [totalExpense, setTotalExpense] = useState(0);
  const [average,setAverage] = useState();
  const navigate = useNavigate();
  useDocumentTitle('Expense - FinFlow');


  const AverageExpense = () => {
    getExpense()
      .then((res) => {
        const itemsArray = res.data.data;
        const length = Number(itemsArray.length);
        const totalExpense = itemsArray.reduce((sum,item)=>{
          return sum + Number(item.amount)
        },0);
        const expenseAverage = length === 0 ? 0 : Number(totalExpense/length).toFixed(2);
        setAverage(expenseAverage);
      })
  };

  const uniqueData =
    Object.values(
      expenseList.reduce((acc, item) => {
        if (!acc[item.category]) {
          acc[item.category] = { ...item };
        } else {
          acc[item.category].amount += item.amount;
        }
        return acc;
      }, {})
    );

  useEffect(() => {

    const getExpenseData = async () => {
      const expData = await getExpense();
      const totalExp = await getUserTransection();

      if (totalExp.data.success) {
        setTotalExpense(totalExp.data.data.monthlyExpense);
      }
      if (expData.data.success) {
        setExpenseList(expData.data.data);
      }
    }
    getExpenseData();
    // Set the average expense 
    AverageExpense();
  }, []);

  const expenseChart = {
    labels: uniqueData.length === 0
      ? ['No Data']
      : uniqueData.map(item => item.title || item.category || 'Expense'),
    datasets: [{
      label: 'Exoense',
      data: uniqueData.length === 0 ? [0] : uniqueData.map(item => Number(item.amount)),
      backgroundColor: '#DC143C',
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
    <div className={expenseStyles.pageWrapper}>
      <Navbar />
      <div className={expenseStyles.container}>

        {/*  TOP HEADER SECTION */}
        <div className={expenseStyles.headerWrapper}>
          <div>
            <h1 className={expenseStyles.title}>Expense Overview</h1>
            <p className={expenseStyles.subtitle}>Track and manage your expenses across various sources.</p>
          </div>

          <div className={expenseStyles.actionContainer}>
            {/* Timeframe Toggles */}
            <div className={expenseStyles.tabWrapper}>
              {['Daily', 'Weekly', 'Monthly', 'Yearly'].map((type) => (
                <button
                  key={type}
                  onClick={() => setTimeframe(type)}
                  className={timeframe === type ? expenseStyles.tabBtnActive : expenseStyles.tabBtnInactive}
                >
                  {type}
                </button>
              ))}
            </div>

            <button className={expenseStyles.addBtn} onClick={() => navigate('/addexpense')}>Add Expense</button>
          </div>
        </div>

        {/*  STATS OVERVIEW CARDS */}
        <div className={expenseStyles.statsGrid}>
          {/* Total Expense */}
          <div className={expenseStyles.card}>
            <div>
              <p className={expenseStyles.cardTitle}>Total Expense</p>
              <h3 className={expenseStyles.cardValue}>${totalExpense}</h3>
              <p className={expenseStyles.cardSubtext}>
                <IonIcon icon={calendarOutline} /> {timeframe} Data
              </p>
            </div>
            <div className={expenseStyles.iconWrapperRed}>
              <IonIcon icon={logoUsd} />
            </div>
          </div>

          {/* Average Income */}
          <div className={expenseStyles.card}>
            <div>
              <p className={expenseStyles.cardTitle}>Average Expense</p>
              <h3 className={expenseStyles.cardValue}>${average || 0}</h3>
              <p className={expenseStyles.cardSubtext}>
                <IonIcon icon={calendarOutline} /> {timeframe} Data
              </p>
            </div>
            <div className={expenseStyles.iconWrapperBlue}>
              <IonIcon icon={logoUsd} />
            </div>
          </div>

          {/* Transactions Count */}
          <div className={expenseStyles.card}>
            <div>
              <p className={expenseStyles.cardTitle}>Transactions Count</p>
              <h3 className={expenseStyles.cardValue}>{expenseList?.length || 0}</h3>
              <p className={expenseStyles.cardSubtext}>
                <IonIcon icon={calendarOutline} /> {timeframe} Data
              </p>
            </div>
            <div className={expenseStyles.iconWrapperPurple}>
              <IonIcon icon={listOutline} />
            </div>
          </div>
        </div>
        {/* 4. RECENT TRANSACTION & CHART DETAILS */}
        <div className={expenseStyles.bottomGrid}>

          {/* Recent Transaction Side */}
          <div className={expenseStyles.panelLarge}>
            {/* Panel Header */}
            <div className={expenseStyles.panelHeader}>
              <div className={expenseStyles.panelTitleContainer}>
                <IonIcon icon={timeOutline} />
                <span className={expenseStyles.panelTitleText}>Recent Transactions</span>
              </div>
              <button className={expenseStyles.panelRefreshBtn} onClick={() => window.location.reload()}>
                <IonIcon icon={refreshOutline} />
              </button>
            </div>

            {/* Conditional Rendering Logic */}
            {expenseList.length === 0 ? (
              <div className={expenseStyles.emptyStateContainer}>
                <IonIcon icon={logoUsd} className="text-3xl text-gray-600 animate-pulse" />
                <p className={expenseStyles.emptyStateText}>No recent transactions tracked for this selection.</p>
              </div>
            ) : (

              <div className={expenseStyles.listWrapper}>
                {expenseList.map((item, index) => (
                  <div key={item._id || index} className={expenseStyles.listItemRow}>
                    <div className={expenseStyles.itemLeftBlock}>
                      <span className={expenseStyles.itemTitle}>
                        {item.category || item.description || 'Expense Item'}
                      </span>
                    </div>
                    <span className={expenseStyles.itemAmount}>
                      +${Number(item.amount || 0).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Spending Category/Chart Side */}
          <div className={expenseStyles.panelSmall}>
            <div className={expenseStyles.panelHeader}>
              <div className={expenseStyles.panelTitleContainer}>
                <IonIcon icon={pieChartOutline} className="text-blue-500" />
                <span className={expenseStyles.panelTitleText}>Spending by Category</span>
              </div>
            </div>

            <div className={expenseStyles.chartPlaceholder}>
              <Doughnut data={expenseChart} options={doughnutOptions} />
            </div>

            <div className={expenseStyles.chartFooterRow}>
              <div className="border-l border-gray-100">
                <p className={expenseStyles.footerLabel}>Total Expense</p>
                <p className={expenseStyles.footerValueExpense}>$0</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Expense;