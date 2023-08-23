import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import { useState, useEffect, useRef } from "react";

import classes from "./get-a-quote.module.scss";

function GetAQuote() {
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef();
  useEffect(() => {
    ref.current = document.getElementById("modals");
    setIsMounted(true);
  }, []);

  return isMounted
    ? createPortal(
        <>
          <div className={classes.overlay} data-aos="fade-up"></div>
          <motion.div
            className={classes.modal}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className={classes.top}>
              <h2>Schedule a Meeting</h2>
              <p>We are looking forward to close more deals for you!</p>
              <div className={classes.close}>
                <span className={classes.top}></span>
                <span className={classes.bottom}></span>
              </div>
            </div>
            <div className={classes.bottom}>
              <div className={classes["month-date"]}>
                &lt; August, 2023 &gt;
              </div>
              <form>
                <div className={classes.container}>
                  <div className={classes["radio-tile-group"]}>
                    <div className={classes["input-container"]}>
                      <input
                        id="20"
                        className={classes["radio-button"]}
                        type="radio"
                        name="date"
                      />
                      <div className={classes["radio-tile"]}>
                        <label
                          htmlFor="20"
                          className={classes["radio-tile-label"]}
                        >
                          <span className={classes.day}>Sun</span>
                          <span className={classes.date}>20</span>
                        </label>
                      </div>
                    </div>
                    <div className={classes["input-container"]}>
                      <input
                        id="21"
                        className={classes["radio-button"]}
                        type="radio"
                        name="date"
                      />
                      <div className={classes["radio-tile"]}>
                        <label
                          htmlFor="21"
                          className={classes["radio-tile-label"]}
                        >
                          <span className={classes.day}>Mon</span>
                          <span className={classes.date}>21</span>
                        </label>
                      </div>
                    </div>
                    <div className={classes["input-container"]}>
                      <input
                        id="22"
                        className={classes["radio-button"]}
                        type="radio"
                        name="date"
                      />
                      <div className={classes["radio-tile"]}>
                        <label
                          htmlFor="22"
                          className={classes["radio-tile-label"]}
                        >
                          <span className={classes.day}>Tus</span>
                          <span className={classes.date}>22</span>
                        </label>
                      </div>
                    </div>
                    <div className={classes["input-container"]}>
                      <input
                        id="23"
                        className={classes["radio-button"]}
                        type="radio"
                        name="date"
                      />
                      <div className={classes["radio-tile"]}>
                        <label
                          htmlFor="23"
                          className={classes["radio-tile-label"]}
                        >
                          <span className={classes.day}>Wed</span>
                          <span className={classes.date}>23</span>
                        </label>
                      </div>
                    </div>
                    <div className={classes["input-container"]}>
                      <input
                        id="24"
                        className={classes["radio-button"]}
                        type="radio"
                        name="date"
                      />
                      <div className={classes["radio-tile"]}>
                        <label
                          htmlFor="24"
                          className={classes["radio-tile-label"]}
                        >
                          <span className={classes.day}>Thu</span>
                          <span className={classes.date}>24</span>
                        </label>
                      </div>
                    </div>
                    <div className={classes["input-container"]}>
                      <input
                        id="25"
                        className={classes["radio-button"]}
                        type="radio"
                        name="date"
                      />
                      <div className={classes["radio-tile"]}>
                        <label
                          htmlFor="25"
                          className={classes["radio-tile-label"]}
                        >
                          <span className={classes.day}>Fri</span>
                          <span className={classes.date}>25</span>
                        </label>
                      </div>
                    </div>
                    <div className={classes["input-container"]}>
                      <input
                        id="26"
                        className={classes["radio-button"]}
                        type="radio"
                        name="date"
                      />
                      <div className={classes["radio-tile"]}>
                        <label
                          htmlFor="26"
                          className={classes["radio-tile-label"]}
                        >
                          <span className={classes.day}>Sat</span>
                          <span className={classes.date}>26</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classes["month-date"]}>&lt; Time &gt;</div>
                <div className={classes["container-time"]}>
                  <div className={classes["radio-tile-group"]}>
                    <div className={classes["input-container"]}>
                      <input
                        id="4"
                        className={classes["radio-button"]}
                        type="radio"
                        name="time"
                      />
                      <div className={classes["radio-tile"]}>
                        <label
                          htmlFor="4"
                          className={classes["radio-tile-label"]}
                        >
                          <span className={classes.day}>04:00</span>
                          <span className={classes.date}>PM</span>
                        </label>
                      </div>
                    </div>
                    <div className={classes["input-container"]}>
                      <input
                        id="45"
                        className={classes["radio-button"]}
                        type="radio"
                        name="time"
                      />
                      <div className={classes["radio-tile"]}>
                        <label
                          htmlFor="45"
                          className={classes["radio-tile-label"]}
                        >
                          <span className={classes.day}>04:30</span>
                          <span className={classes.date}>PM</span>
                        </label>
                      </div>
                    </div>
                    <div className={classes["input-container"]}>
                      <input
                        id="5"
                        className={classes["radio-button"]}
                        type="radio"
                        name="time"
                      />
                      <div className={classes["radio-tile"]}>
                        <label
                          htmlFor="5"
                          className={classes["radio-tile-label"]}
                        >
                          <span className={classes.day}>05:00</span>
                          <span className={classes.date}>PM</span>
                        </label>
                      </div>
                    </div>
                    <div className={classes["input-container"]}>
                      <input
                        id="55"
                        className={classes["radio-button"]}
                        type="radio"
                        name="time"
                      />
                      <div className={classes["radio-tile"]}>
                        <label
                          htmlFor="55"
                          className={classes["radio-tile-label"]}
                        >
                          <span className={classes.day}>05:30</span>
                          <span className={classes.date}>PM</span>
                        </label>
                      </div>
                    </div>
                    <div className={classes["input-container"]}>
                      <input
                        id="6"
                        className={classes["radio-button"]}
                        type="radio"
                        name="time"
                      />
                      <div className={classes["radio-tile"]}>
                        <label
                          htmlFor="6"
                          className={classes["radio-tile-label"]}
                        >
                          <span className={classes.day}>06:00</span>
                          <span className={classes.date}>PM</span>
                        </label>
                      </div>
                    </div>
                    <div className={classes["input-container"]}>
                      <input
                        id="65"
                        className={classes["radio-button"]}
                        type="radio"
                        name="time"
                      />
                      <div className={classes["radio-tile"]}>
                        <label
                          htmlFor="65"
                          className={classes["radio-tile-label"]}
                        >
                          <span className={classes.day}>06:30</span>
                          <span className={classes.date}>PM</span>
                        </label>
                      </div>
                    </div>
                    <div className={classes["input-container"]}>
                      <input
                        id="7"
                        className={classes["radio-button"]}
                        type="radio"
                        name="time"
                      />
                      <div className={classes["radio-tile"]}>
                        <label
                          htmlFor="7"
                          className={classes["radio-tile-label"]}
                        >
                          <span className={classes.day}>07:00</span>
                          <span className={classes.date}>PM</span>
                        </label>
                      </div>
                    </div>
                    <div className={classes["input-container"]}>
                      <input
                        id="75"
                        className={classes["radio-button"]}
                        type="radio"
                        name="time"
                      />
                      <div className={classes["radio-tile"]}>
                        <label
                          htmlFor="75"
                          className={classes["radio-tile-label"]}
                        >
                          <span className={classes.day}>07:30</span>
                          <span className={classes.date}>PM</span>
                        </label>
                      </div>
                    </div>
                    <div className={classes["input-container"]}>
                      <input
                        id="8"
                        className={classes["radio-button"]}
                        type="radio"
                        name="time"
                      />
                      <div className={classes["radio-tile"]}>
                        <label
                          htmlFor="8"
                          className={classes["radio-tile-label"]}
                        >
                          <span className={classes.day}>08:00</span>
                          <span className={classes.date}>PM</span>
                        </label>
                      </div>
                    </div>
                    <div className={classes["input-container"]}>
                      <input
                        id="85"
                        className={classes["radio-button"]}
                        type="radio"
                        name="time"
                      />
                      <div className={classes["radio-tile"]}>
                        <label
                          htmlFor="85"
                          className={classes["radio-tile-label"]}
                        >
                          <span className={classes.day}>08:30</span>
                          <span className={classes.date}>PM</span>
                        </label>
                      </div>
                    </div>
                    <div className={classes["input-container"]}>
                      <input
                        id="9"
                        className={classes["radio-button"]}
                        type="radio"
                        name="time"
                      />
                      <div className={classes["radio-tile"]}>
                        <label
                          htmlFor="9"
                          className={classes["radio-tile-label"]}
                        >
                          <span className={classes.day}>09:00</span>
                          <span className={classes.date}>PM</span>
                        </label>
                      </div>
                    </div>
                    <div className={classes["input-container"]}>
                      <input
                        id="95"
                        className={classes["radio-button"]}
                        type="radio"
                        name="time"
                      />
                      <div className={classes["radio-tile"]}>
                        <label
                          htmlFor="95"
                          className={classes["radio-tile-label"]}
                        >
                          <span className={classes.day}>09:30</span>
                          <span className={classes.date}>PM</span>
                        </label>
                      </div>
                    </div>
                    <div className={classes["input-container"]}>
                      <input
                        id="10"
                        className={classes["radio-button"]}
                        type="radio"
                        name="time"
                      />
                      <div className={classes["radio-tile"]}>
                        <label
                          htmlFor="10"
                          className={classes["radio-tile-label"]}
                        >
                          <span className={classes.day}>10:00</span>
                          <span className={classes.date}>PM</span>
                        </label>
                      </div>
                    </div>
                    <div className={classes["input-container"]}>
                      <input
                        id="105"
                        className={classes["radio-button"]}
                        type="radio"
                        name="time"
                      />
                      <div className={classes["radio-tile"]}>
                        <label
                          htmlFor="105"
                          className={classes["radio-tile-label"]}
                        >
                          <span className={classes.day}>10:30</span>
                          <span className={classes.date}>PM</span>
                        </label>
                      </div>
                    </div>
                    <div className={classes["input-container"]}>
                      <input
                        id="11"
                        className={classes["radio-button"]}
                        type="radio"
                        name="time"
                      />
                      <div className={classes["radio-tile"]}>
                        <label
                          htmlFor="11"
                          className={classes["radio-tile-label"]}
                        >
                          <span className={classes.day}>11:00</span>
                          <span className={classes.date}>PM</span>
                        </label>
                      </div>
                    </div>
                    <div className={classes["input-container"]}>
                      <input
                        id="115"
                        className={classes["radio-button"]}
                        type="radio"
                        name="time"
                      />
                      <div className={classes["radio-tile"]}>
                        <label
                          htmlFor="115"
                          className={classes["radio-tile-label"]}
                        >
                          <span className={classes.day}>11:30</span>
                          <span className={classes.date}>PM</span>
                        </label>
                      </div>
                    </div>
                    <div className={classes["input-container"]}>
                      <input
                        id="12"
                        className={classes["radio-button"]}
                        type="radio"
                        name="time"
                      />
                      <div className={classes["radio-tile"]}>
                        <label
                          htmlFor="12"
                          className={classes["radio-tile-label"]}
                        >
                          <span className={classes.day}>12:00</span>
                          <span className={classes.date}>AM</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <button>Schedule The Meeting</button>
                <input type="datetime-local" min ="2023-08-20"/>
              </form>
            </div>
          </motion.div>
        </>,
        ref.current
      )
    : null;
}

export default GetAQuote;
