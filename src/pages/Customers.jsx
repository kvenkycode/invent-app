import React from 'react';
import styles from "./dashboard.module.scss";
const Customers = () => {
  return (
      <main className={styles.contentSection}>
      {/* PAGE HEADER SECTION: Title and action buttons */}
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Customers</h1>
        <div className={styles.headerActions}>
          <button className={styles.actionBtn}>
            <i className="fas fa-arrow-up-short-wide"></i>
            Sort By
          </button>
          <button className={styles.actionBtn}>
            <i className="fas fa-filter"></i>
            Filter
          </button>
          <button className={styles.primaryBtn}>
            <i className="fas fa-plus"></i>
            Add Notes
          </button>
        </div>
      </div>
      </main>
  )
}

export default Customers