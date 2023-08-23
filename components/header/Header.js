import { motion } from "framer-motion";
import { useContext } from "react";
import Link from "next/link";

import classes from "./header.module.scss";
import Logo from "../layout/logo/Logo";
import MenuButton from "../layout/menu-button/MenuButton";
import Nav from "../layout/nav/Nav";
import MainContext from "@/context/main-context";

function Header() {
  const Ctx = useContext(MainContext);

  return (
    <>
      <header id={classes.header}>
        <div
          className={classes["menu-button"]}
          onMouseDown={() => {
            if (Ctx.nav === false) {
              Ctx.showNav();
            } else {
              Ctx.hideNav();
            }
          }}
        >
          <MenuButton />
        </div>
        <Nav />
        <div className={classes.logo}>
          <Logo />
        </div>
        <motion.div
          className={classes.cta}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className={classes["contact-us"]}>
            <Link href="#contact-form">Contact Us</Link>
          </div>
          <div className={classes["get-a-quote"]}>
            <button
              onClick={() => {
                if (Ctx.modal === false) {
                  Ctx.showModal();
                } else {
                  Ctx.hideModal();
                }
              }}
            >
              Get a Quote
            </button>
          </div>
        </motion.div>
      </header>
    </>
  );
}

export default Header;
