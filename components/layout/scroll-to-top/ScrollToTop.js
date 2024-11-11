import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";

import classes from "./scroll-to-top.module.scss";
import MainContext from "@/context/main-context";

function ScrollToTop() {
  const Ctx = useContext(MainContext);

  const activeScroll = Ctx.scroll;

  return (
    <>
      <AnimatePresence>
        {activeScroll && (
          <motion.div
            className={classes["scroll-to-top"]}
            initial={{ opacity: 0, x: 25, y: 25 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 0, y: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 384 512"
            >
              <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ScrollToTop;
