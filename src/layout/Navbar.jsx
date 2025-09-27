import styles from "./navbar.module.scss";

export default function Navbar() {
  return (
    <header className={styles.navbarSection}>
      <div className={styles.navbarLeft}>
        <div className={styles.logoContainer}>
          <div className={styles.logoIcon}>V</div>
          <span className={styles.logoText}>Venture</span>
        </div>

        <div className={styles.sidebarToggle}>
          <i className="bi bi-chevron-left"></i>
          <i className="fas fa-chevron-left"></i>
        </div>

        <div className={styles.searchContainer}>
          <i className={`bi bi-search ${styles.searchIcon}`}></i>
          <input
            type="text"
            placeholder="Search"
            className={styles.searchInput}
          />
          <div className={styles.searchShortcuts}>
            <span className={styles.shortcutKey}>⌘</span>
            <span className={styles.shortcutKey}>F</span>
          </div>
        </div>
      </div>

      <div className={styles.navbarRight}>
        <div className={styles.helpCenter}>
          <i className="bi bi-question-circle"></i>
          <span>Help Center</span>
        </div>

        <div className={styles.userProfile}>
          <img
            src="https://i.pravatar.cc/32?img=1"
            alt="Profile"
            className={styles.profileImg}
          />
          <span className={styles.userName}>Brian F.</span>
          <i className="bi bi-chevron-down"></i>
        </div>
      </div>
    </header>
  );
}
