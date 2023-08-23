import { motion } from "framer-motion";

import classes from "./hero-banner.module.scss";

function HeroBanner() {
  return (
    <>
      <div className={classes.wraper}>
        <motion.div
          className={classes["hero-banner"]}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          We are a bunch of <span className={classes.colorful}>future</span>{" "}
          holders, demanding to make it exceptional
        </motion.div>
      </div>
    </>
  );
}

export default HeroBanner;
