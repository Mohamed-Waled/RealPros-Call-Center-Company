import { createPortal } from "react-dom";
import { useState, useEffect, useRef, useContext } from "react";
import MainContext from "@/context/main-context";
import { InlineWidget } from "react-calendly";

import classes from "./get-a-quote.module.scss";

function GetAQuote(props) {
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef();
  const Ctx = useContext(MainContext);
  useEffect(() => {
    ref.current = document.getElementById("modals");
    setIsMounted(true);
  }, []);

  return isMounted
    ? createPortal(
        <>
          <div
            className={classes.overlay}
            data-aos="fade-up"
            onClick={() => {
              if (Ctx.discovery === false) {
                Ctx.showDiscovery();
              } else {
                Ctx.hideDiscovery();
              }
            }}
          ></div>
          <div className={classes.app}>
            <InlineWidget url={props.url} />
            <div
              className={classes.close}
              onClick={() => {
                if (Ctx.discovery === false) {
                  Ctx.showDiscovery();
                } else {
                  Ctx.hideDiscovery();
                }
              }}
            >
              <span className={classes.top}></span>
              <span className={classes.bottom}></span>
            </div>
          </div>
        </>,
        ref.current
      )
    : null;
}

export default GetAQuote;
