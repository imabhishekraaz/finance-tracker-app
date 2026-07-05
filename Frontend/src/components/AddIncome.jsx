import React, { useState } from 'react';
import { addIncomeStyles as styles } from '../styles/style';
import { useNavigate } from 'react-router-dom';
import { addIncome } from '../api/api';

const AddIncome = () => {
  const [amount, setAmount] = useState();
  const [category, setCategory] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const navigate = useNavigate();

  const onSubmit =  (e) => {
    e.preventDefault();
    addIncome(amount,date,description,category)
      .then((data) => {
        navigate(-1);
      })
      .catch((error)=> {
        console.log(error.message);
      })
  }


  return (
    <div className={styles.modalBackdrop} >
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>

        {/* Header */}
        <div className={styles.headerWrapper}>
          <div>
            <h2 className={styles.title}>Add Income</h2>
            <p className={styles.subtitle}>Record your new earnings and source of income.</p>
          </div>

          <button type="button" className={styles.closeBtn} onClick={() => navigate(-1)}>
            ✕
          </button>
        </div>

        {/* Form */}
        <form className={styles.form}>

          {/* Amount */}
          <div className={styles.formGroup}>
            <label htmlFor="amount" className={styles.label}>Amount ($)</label>
            <input
              type="number"
              id="amount"
              name="amount"
              required
              placeholder="0.00"
              onChange={e => setAmount(e.target.value)}
              className={styles.input}
            />
          </div>

          {/* Date */}
          <div className={styles.formGroup}>
            <label htmlFor="date" className={styles.label}>Date</label>
            <input
              type="date"
              id="date"
              name="date"
              required
              onChange={e => setDate(e.target.value)}
              className={styles.input}
            />
          </div>

          {/* Category */}
          <div className={styles.formGroup}>
            <label htmlFor="category" className={styles.label}>Category</label>
            <select
              id="category"
              name="category"
              required
              onChange={e => setCategory(e.target.value) || 'other'}
              className={styles.select}
            >
              <option value="" disabled hidden>Select category</option>
              <option value="salary">Salary</option>
              <option value="freelance">Freelance / Side Hustle</option>
              <option value="investments">Investments</option>
              <option value="gifts">Gifts</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Description */}
          <div className={styles.formGroup}>
            <label htmlFor="description" className={styles.label}>Description / Source</label>
            <textarea
              id="description"
              name="description"
              rows="3"
              placeholder="E.g., Monthly salary payment..."
              className={styles.textarea}
              onChange={e => setDescription(e.target.value)}
            />
          </div>


          {/* Action Buttons */}
          <div className="flex flex-col gap-2 mt-2">
            <button
              type="submit"
              className={styles.submitBtn}
              onClick={onSubmit}
            >
              Add Income
            </button>

            <button
              type="button"
              className="w-full py-3 text-center cursor-pointer text-sm font-medium text-gray-500 hover:text-gray-700 lg:hidden"
              onClick={() => navigate(-1)}
            >
              Cancel & Go Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddIncome;