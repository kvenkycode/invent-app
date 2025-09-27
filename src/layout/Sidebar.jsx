// src/components/Sidebar.jsx
import styles from "./sidebar.module.scss";
import { menuItems } from "../utl/menuItems";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Sidebar() {
  const [active, setActive] = useState(false);

  // <a href="#" className={`${styles.navItem} ${styles.active}`}></a>

  let handleHoverClick = (e, id) => {
    
    setActive(id);
   
  };

  return (
    <aside className={styles.sidebarSection}>
      <nav className={styles.mainNav}>
        {menuItems.map((menu) => (
          <Link
            to={menu.path}
            key={menu.id}
            className={`${styles.navItem}  ${
              active === menu.id ? styles.active : ""
            } `}
            onClick={(e) => handleHoverClick(e, menu.id)}
          >
            <i className={menu.icon}></i>
            <span>{menu.label}</span>
          </Link>
        ))}
      </nav>

     

      <div className={styles.mainNav}>
        <a href="#" className={styles.navItem}>
          <i className="bi bi-grid"></i>
          <span>Integrations</span>
        </a>
        <a href="#" className={styles.navItem}>
          <i className="bi bi-gear"></i>
          <span>Settings</span>
        </a>
      </div>

      <div className={styles.teamSection}>
        <div className={styles.teamInfo}>
          <div className={styles.teamAvatar}>M</div>
          <span className={styles.teamName}>Marketing Team's</span>
        </div>
        <div className={styles.teamControls}>
          <i className="bi bi-chevron-up"></i>
          <i className="bi bi-chevron-down"></i>
        </div>
      </div>
    </aside>
  );
}
