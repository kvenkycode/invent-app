import { Link } from "react-router-dom";
import shape1 from "../assets/images/shape-1.png";
import shape2 from "../assets/images/shape-2.png";
import shape3 from "../assets/images/shape-3.png";
import bgImg from '../assets/images/bg.png';
import styles from "./layout.module.scss";

const Home = () => {
 const backgroundStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(242, 254, 247, 12%) 0%, rgba(201, 250, 223, 99%) 100%), url(${bgImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <>
      <div className={styles.landigPage} style={backgroundStyle}>
        <div className={styles.animatedRoot}>
          <div className={styles.headingWrapper}>
            <h1>
              <span className={styles.italic}>Inventory</span>
              <label> Made simple</label> with
            </h1>
            <h1> Our SaaS Platform</h1>
            <div className={styles.actionClick}>
              <Link to="/login" style={{ cursor: "pointer" }}>
                Login
              </Link>
              <Link to="/register" style={{ cursor: "pointer" }}>
                Register
              </Link>
              <Link to="/register" style={{ cursor: "pointer" }}>
                Logout
              </Link>
            </div>
          </div>
          <img
           className={styles.upDownAnim}
            src={shape1}
            alt=""
            style={{
              width: 370,
              position: "absolute",
              bottom: "20px",
              right: "0",
            }}
          />
          <img
          className={styles.upDownAnim2}
            src={shape2}
            alt=""
            style={{
              width: 290,
              position: "absolute",
              left: "12rem",
              bottom: "150px",
            }}
          />
          <img
           className={styles.upDownAnim3}
            src={shape3}
            alt=""
            style={{
              width: 470,
              position: "absolute",
              top: "0rem",
              left: "25rem",
              zIndex: "0",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
