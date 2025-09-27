import { useEffect, useState } from "react";
import styles from "./dashboard.module.scss";
import DateComp from "../components/DateComp";

const Dashboard = () => {
  const [currTime, serCurrTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => serCurrTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <main className={styles.contentSection}>
      {/* PAGE HEADER SECTION: Title and action buttons */}
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Notes</h1>
        <div className={styles.headerActions}>
          <div style={{position:"relative"}}>
            <i class="bi bi-calendar3 me-2"></i> 
            <DateComp />
          </div>
          <div>
            <i className="bi bi-clock"></i> {currTime.toLocaleTimeString()}
          </div>

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

      {/* CARDS GRID SECTION */}
      <div className={styles.notesGrid}>
        {/* Note Card 1 */}
        <div className={styles.noteCard}>
          <div className={styles.cardTags}>
            <span className={`${styles.tag} ${styles.tagWeekly}`}>Weekly</span>
            <span className={`${styles.tag} ${styles.tagProduct}`}>
              Product
            </span>
          </div>
          <h3 className={styles.cardTitle}>Product Team Meeting</h3>
          <div className={styles.cardContent}>
            <p>This monthly progress agenda is following this items:</p>
            <ul>
              <li>Introduction to Newest Product Plan</li>
              <li>Monthly Revenue updates for each</li>
            </ul>
          </div>
          <div className={styles.cardFooter}>
            <div className={styles.authorInfo}>
              <img
                src="https://i.pravatar.cc/24?img=1"
                alt="Floyd Miles"
                className={styles.authorAvatar}
              />
              <span className={styles.authorName}>Floyd Miles</span>
            </div>
            <span className={styles.timestamp}>Mar 5 04:25</span>
          </div>
        </div>

        {/* Note Card 2 */}
        <div className={styles.noteCard}>
          <div className={styles.cardTags}>
            <span className={`${styles.tag} ${styles.tagMonthly}`}>
              Monthly
            </span>
            <span className={`${styles.tag} ${styles.tagBusiness}`}>
              Business
            </span>
          </div>
          <h3 className={styles.cardTitle}>Product Team Meeting</h3>
          <div className={styles.cardContent}>
            <p>This monthly progress agenda is following this items:</p>
            <ul>
              <li>Introduction to Newest Product Plan</li>
              <li>Monthly Revenue updates for each</li>
            </ul>
          </div>
          <div className={styles.cardFooter}>
            <div className={styles.authorInfo}>
              <img
                src="https://i.pravatar.cc/24?img=2"
                alt="Dianne Russell"
                className={styles.authorAvatar}
              />
              <span className={styles.authorName}>Dianne Russell</span>
            </div>
            <span className={styles.timestamp}>Apr 11 18:30</span>
          </div>
        </div>

        {/* Note Card 3 */}
        <div className={styles.noteCard}>
          <div className={styles.cardTags}>
            <span className={`${styles.tag} ${styles.tagPersonal}`}>
              Personal
            </span>
            <span className={`${styles.tag} ${styles.tagBusiness}`}>
              Business
            </span>
          </div>
          <h3 className={styles.cardTitle}>HR Interview</h3>
          <div className={styles.cardContent}>
            <p>This monthly progress agenda is following this items:</p>
            <ul>
              <li>Introduction to Newest Product Plan</li>
              <li>Monthly Revenue updates for each</li>
            </ul>
          </div>
          <div className={styles.cardFooter}>
            <div className={styles.authorInfo}>
              <img
                src="https://i.pravatar.cc/24?img=3"
                alt="Annette Black"
                className={styles.authorAvatar}
              />
              <span className={styles.authorName}>Annette Black</span>
            </div>
            <span className={styles.timestamp}>Jun 23 14:31</span>
          </div>
        </div>

        {/* Note Card 4 */}
        <div className={styles.noteCard}>
          <div className={styles.cardTags}>
            <span className={`${styles.tag} ${styles.tagMonthly}`}>
              Monthly
            </span>
            <span className={`${styles.tag} ${styles.tagProduct}`}>
              Product
            </span>
          </div>
          <h3 className={styles.cardTitle}>Monthly Team Progress</h3>
          <div className={styles.cardContent}>
            <p>This monthly progress agenda is following this items:</p>
            <ul>
              <li>Introduction to Newest Product Plan</li>
              <li>Monthly Revenue updates for each</li>
            </ul>
          </div>
          <div className={styles.cardFooter}>
            <div className={styles.authorInfo}>
              <img
                src="https://i.pravatar.cc/24?img=4"
                alt="Robert Fox"
                className={styles.authorAvatar}
              />
              <span className={styles.authorName}>Robert Fox</span>
            </div>
            <span className={styles.timestamp}>Jan 31 09:53</span>
          </div>
        </div>

        {/* Note Card 5 */}
        <div className={styles.noteCard}>
          <div className={styles.cardTags}>
            <span className={`${styles.tag} ${styles.tagMonthly}`}>
              Monthly
            </span>
            <span className={`${styles.tag} ${styles.tagBusiness}`}>
              Business
            </span>
          </div>
          <h3 className={styles.cardTitle}>Product Team Meeting</h3>
          <div className={styles.cardContent}>
            <p>
              Some Summaries of this weeks meeting with some conclusion we get:
            </p>
            <ul>
              <li>
                <i className="fas fa-check-circle"></i> Some of our product
                uploaded improved
              </li>
            </ul>
          </div>
          <div className={styles.cardFooter}>
            <div className={styles.authorInfo}>
              <img
                src="https://i.pravatar.cc/24?img=5"
                alt="Brooklyn Simmons"
                className={styles.authorAvatar}
              />
              <span className={styles.authorName}>Brooklyn Simmons</span>
            </div>
            <span className={styles.timestamp}>Aug 15 10:29</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
