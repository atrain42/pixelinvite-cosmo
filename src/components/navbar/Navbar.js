import { useRef } from "react";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

import logo from "../../img/heart.svg";

const Navbar = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <nav className={classes.nav} ref={ref}>
      <div className={classes.navOverhang}>
        <div className={classes.homeButton}>
          <Link
            className={classes.logoText}
            to='/'
            style={{
              transform: isInView ? 'none' : 'translateX(20px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 0.75s linear 0.75s',
            }}
          >
            <img src={logo} alt='logo' id='logo'></img>
            Beth and Roger
          </Link>
        </div>
        <Navigation />
        <MobileNavigation />
      </div>
    </nav>
  )
};

export default Navbar;
