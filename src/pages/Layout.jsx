import { Outlet } from "react-router-dom";
import Sidebar from "../layout/Sidebar";
import Navbar from "../layout/Navbar";
import styles from "./layout.module.scss";

export default function Layout() {
  return (
    <div className={styles.appContainer}>
      <Navbar />
      <div className={styles.mainLayout}>
        <Sidebar />
       
          <Outlet />
        
      </div>
    </div>
  );
}
