import Link from "next/link";
import { motion } from "framer-motion";

import classes from "./banner.module.scss";

function Banner() {
  return (
    <motion.div
      className={classes.banner}
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <div className={classes.text}>Get CASH With RealPros Call Center</div>
      <p className={classes.description}>
        Send us Clients & Get Paid $100/MONTH for each active member
      </p>
      <Link href="#contact-form">
        Get Started!
        <span></span>
      </Link>
    </motion.div>
  );
}

export default Banner;
