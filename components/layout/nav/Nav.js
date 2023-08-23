import { motion, AnimatePresence } from "framer-motion";
import { useContext, useEffect } from "react";
import Link from "next/link";

import classes from "./nav.module.scss";
import MenuButtonContext from "@/context/main-context";

function Nav() {
  const menuCtx = useContext(MenuButtonContext);

  useEffect(() => {
    if (window !== undefined) {
      if (window.innerWidth > 800) {
        menuCtx.showNav();
      }
    }
  }, []);

  const activeNav = menuCtx.nav;

  return (
    <>
      <AnimatePresence>
        {activeNav && (
          <motion.nav
            className={classes.nav}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
          >
            <ul>
              <li>
                <Link className={classes.link} href="#about-us">
                  About Us
                </Link>
              </li>
              <li>
                <Link className={classes.link} href="#how-it-works">
                  How it Works?
                </Link>
              </li>
              <li>
                <Link className={classes.link} href="#pricing-plans">
                  Pricing Plans
                </Link>
              </li>
              <div className={classes["cta-mobile"]}>
                <li>
                  <Link className={classes.link} href="">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className={classes.link}
                    href="#contact-form"
                    onClick={(e) => {
                      e.preventDefault();
                      if (menuCtx.modal === false) {
                        menuCtx.showModal();
                      } else {
                        menuCtx.hideModal();
                      }
                    }}
                  >
                    Get a Quote
                  </Link>
                </li>
              </div>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

export default Nav;
