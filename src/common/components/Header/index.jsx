import React, { useState } from "react";
import styles from "./style.module.css";
import logoLight from "assets/img/Logo-light.png";
import logoDark from "assets/img/Logo-dark.png";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Header() {
  const [header, setHeader] = useState(false);
  const [navbarLogo, setNavbarLogo] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const history = useHistory();
  const goToHome = () => {
    history.push("/");
  };

  const changeBackgroundHeader = () => {
    if (window.scrollY >= 80) {
      setHeader(true);
      setNavbarLogo(logoDark);
    } else {
      setHeader(false);
      setNavbarLogo(logoLight);
    }
  };

  window.addEventListener("scroll", changeBackgroundHeader);

  return (
    <>
      <div
        className={
          header ? `${styles.active} ${styles.header}   ` : `${styles.header}`
        }
      >
        <div className="container">
          <div className={styles.nav}>
            <span onClick={goToHome} className={styles.logo}>
              <img src={navbarLogo} alt="logo" />
            </span>

            <div
              className={
                isMobile ? `${styles.nav_link_toggle}` : `${styles.menu}`
              }
              onClick={() => {
                setIsMobile(false);
              }}
            >
              <ul className={styles.menu_list}>
                <li>
                  <NavLink to="/" className={styles.nav_link}>
                    Lịch chiếu
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/theater" className={styles.nav_link}>
                    Cụm rạp
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/news" className={styles.nav_link}>
                    Tin tức
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/apps" className={styles.nav_link}>
                    Ứng dụng
                  </NavLink>
                </li>
              </ul>
            </div>

            <button
              className={styles.toggle}
              onClick={() => {
                setIsMobile(!isMobile);
              }}
            >
              {isMobile ? (
                <i class="fa-solid fa-x"></i>
              ) : (
                <i class="fa-solid fa-bars"></i>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
