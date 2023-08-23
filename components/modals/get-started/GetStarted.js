import { createPortal } from "react-dom";
import { useEffect, useRef, useState, useContext } from "react";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import { motion } from "framer-motion";

import "react-toastify/dist/ReactToastify.min.css";
import MainContext from "@/context/main-context";
import "react-phone-input-2/lib/style.css";
import classes from "./get-started.module.scss";

async function sendingData(contactDetails) {
  if (contactDetails.full_name.length > 50) {
    throw new Error("your full name should be less than 50 characters");
  }
  if (contactDetails.full_name.trim() === "") {
    throw new Error("Please enter your full name");
  }
  if (
    !contactDetails.full_name.match(/^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i)
  ) {
    throw new Error(
      "Make sure there is no numbers in the full name or any special character"
    );
  }

  if (contactDetails.company_name.length > 50) {
    throw new Error("your company name should be less than 50 characters");
  }
  if (contactDetails.company_name.trim() === "") {
    throw new Error("Please enter your company name");
  }

  if (contactDetails.email.trim() === "") {
    throw new Error("Please enter your e-mail");
  }
  if (
    !contactDetails.email.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
  ) {
    throw new Error("Please enter a valid e-mail");
  }

  if (contactDetails.phone.length > 50) {
    throw new Error("your phone should be less than 50 characters");
  }
  if (contactDetails.phone.trim() === "") {
    throw new Error("Please enter your phone");
  }
  if (contactDetails.phone.match(/\D+/g)) {
    throw new Error(
      "Make sure there is no letters in the number or any special character"
    );
  }

  // const res = await fetch("http://192.168.1.3:8000/realpros/public/api/popup", {
  //   method: "POST",
  //   body: JSON.stringify(contactDetails),
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });

  const res = await fetch("https://fakestoreapi.com/carts", {
    method: "POST",
    body: JSON.stringify(contactDetails),
  });

  if (!res.ok) {
    throw new Error(data.message || "Something went wrong!");
  }

  const data = await res.json();
}

function GetStarted() {
  const [enteredFName, setEnteredFName] = useState({
    value: "",
    error: "",
    isError: "",
  });
  const [enteredCName, setEnteredCName] = useState({
    value: "",
    error: "",
    isError: "",
  });
  const [enteredPhone, setEnteredPhone] = useState({
    value: "",
    error: "",
    isError: "",
  });
  const [enteredEmail, setEnteredEmail] = useState({
    value: "",
    error: "",
    isError: "",
  });
  const [enteredCMarket, setEnteredCMarket] = useState({
    value: "CMarket",
    error: "",
    isError: "",
  });
  const [enteredHAbout, setEnteredHAbout] = useState({
    value: "HAbout",
    error: "",
    isError: "",
  });

  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef();
  const Ctx = useContext(MainContext);

  useEffect(() => {
    ref.current = document.getElementById("modals");
    setIsMounted(true);
  }, []);

  function validationHandler(name, value) {
    if (name === "enteredFName") {
      if (value.length > 50) {
        setEnteredFName({
          ...enteredFName,
          isError: true,
          error: "Please enter first name less than 50 characters",
        });
      } else if (value.trim() === "") {
        setEnteredFName({
          ...enteredFName,
          isError: true,
          error: "Please enter your first name",
        });
      } else if (!value.match(/^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i)) {
        setEnteredFName({
          ...enteredFName,
          isError: true,
          error:
            "Make sure there is no numbers in the name or any special character",
        });
      } else {
        setEnteredFName({
          ...enteredFName,
          isError: false,
          error: "",
        });
      }
    }
    if (name === "enteredCName") {
      if (value.length > 50) {
        setEnteredCName({
          ...enteredCName,
          isError: true,
          error: "Please enter company name less than 50 characters",
        });
      } else if (value.trim() === "") {
        setEnteredCName({
          ...enteredCName,
          isError: true,
          error: "Please enter your company name",
        });
      } else {
        setEnteredCName({
          ...enteredCName,
          isError: false,
          error: "",
        });
      }
    }
    if (name === "enteredEmail") {
      if (value.trim() === "") {
        setEnteredEmail({
          ...enteredEmail,
          isError: true,
          error: "Please enter your e-mail",
        });
      } else if (
        !value.match(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        )
      ) {
        setEnteredEmail({
          ...enteredEmail,
          isError: true,
          error: "Please enter a valid e-mail",
        });
      } else {
        setEnteredEmail({
          ...enteredEmail,
          isError: false,
          error: "",
        });
      }
    }
    if (name === "enteredPhone") {
      if (value.length > 50) {
        setEnteredPhone({
          ...enteredPhone,
          isError: true,
          error: "Please enter phone number less than 50 characters",
        });
      } else if (value.trim() === "") {
        setEnteredPhone({
          ...enteredPhone,
          isError: true,
          error: "Please enter your phone",
        });
      } else if (value.match(/\D+/g)) {
        setEnteredPhone({
          ...enteredPhone,
          isError: true,
          error:
            "Make sure there is no letters in the number or any special character",
        });
      } else {
        setEnteredPhone({
          ...enteredPhone,
          isError: false,
          error: "",
        });
      }
    }
  }

  async function sendDataHandler(e) {
    e.preventDefault();

    const newMessage = {
      full_name: enteredFName.value,
      company_name: enteredCName.value,
      email: enteredEmail.value,
      phone: enteredPhone.value,
      c_market: enteredCMarket.value,
      h_about: enteredHAbout.value,
    };

    toast.promise(
      sendingData(newMessage),
      {
        pending: "Sending...",
        success: {
          render() {
            setEnteredFName({ value: "", error: "", isError: "" });
            setEnteredCName({ value: "", error: "", isError: "" });
            setEnteredEmail({ value: "", error: "", isError: "" });
            setEnteredPhone({ value: "", error: "", isError: "" });
            setEnteredHAbout({ value: "HAbout", error: "", isError: "" });
            setEnteredCMarket({ value: "CMarket", error: "", isError: "" });
            return "Sent Successfully!";
          },
        },
        error: {
          render({ data }) {
            return data.message;
          },
        },
      },
      {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      }
    );
  }

  return isMounted
    ? createPortal(
        <>
          <div
            className={classes.overlay}
            data-aos="fade-up"
            onClick={() => {
              if (Ctx.modal === false) {
                Ctx.showModal();
              } else {
                Ctx.hideModal();
              }
            }}
          ></div>
          <motion.div
            className={classes.modal}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className={classes.top}>
              <h2>Hey There!</h2>
              <p>We Would Love To Know You!</p>
              <div
                className={classes.close}
                onClick={() => {
                  if (Ctx.modal === false) {
                    Ctx.showModal();
                  } else {
                    Ctx.hideModal();
                  }
                }}
              >
                <span className={classes.top}></span>
                <span className={classes.bottom}></span>
              </div>
            </div>
            <div className={classes.bottom}>
              <form onSubmit={sendDataHandler}>
                <div className={classes["input-container"]}>
                  <label
                    htmlFor="enteredFName"
                    className={classes["input-label"]}
                  >
                    Full Name *:
                  </label>
                  <input
                    type="text"
                    placeholder="Write Your Full Name Here!"
                    name="enteredFName"
                    id="enteredFName"
                    className={classes.input}
                    required
                    value={enteredFName.value}
                    onChange={(e) =>
                      setEnteredFName({
                        ...enteredFName,
                        value: e.target.value,
                      })
                    }
                    onBlur={(e, value) =>
                      validationHandler(e.target.name, enteredFName.value)
                    }
                  />
                  {enteredFName.isError && (
                    <span className={classes.error}>{enteredFName.error}</span>
                  )}
                </div>
                <div className={classes["input-container"]}>
                  <label
                    htmlFor="enteredCName"
                    className={classes["input-label"]}
                  >
                    Company Name *:
                  </label>
                  <input
                    type="text"
                    placeholder="Write Your Company Name Here!"
                    name="enteredCName"
                    id="enteredCName"
                    className={classes.input}
                    required
                    value={enteredCName.value}
                    onChange={(e) =>
                      setEnteredCName({
                        ...enteredCName,
                        value: e.target.value,
                      })
                    }
                    onBlur={(e, value) =>
                      validationHandler(e.target.name, enteredCName.value)
                    }
                  />
                  {enteredCName.isError && (
                    <span className={classes.error}>{enteredCName.error}</span>
                  )}
                </div>
                <div className={classes["input-container"]}>
                  <label
                    htmlFor="enteredPhone"
                    className={classes["input-label"]}
                  >
                    Phone Number *:
                  </label>
                  <PhoneInput
                    inputClass={classes["phone-input"]}
                    country={"eg"}
                    id="enteredPhone"
                    inputProps={{
                      name: "enteredPhone",
                      required: true,
                      placeholder: "Enter Your Phone Number Here!",
                    }}
                    value={enteredPhone.value}
                    onChange={(value) =>
                      setEnteredPhone({
                        ...enteredPhone,
                        value: value,
                      })
                    }
                    onBlur={(e, value) =>
                      validationHandler(e.target.name, enteredPhone.value)
                    }
                  />
                  {enteredPhone.isError && (
                    <span className={classes.error}>{enteredPhone.error}</span>
                  )}
                </div>
                <div className={classes["input-container"]}>
                  <label htmlFor="enteredEmail" className={classes["input-label"]}>
                    E-Mail *:
                  </label>
                  <input
                    type="email"
                    placeholder="Write Your Email Here!"
                    name="enteredEmail"
                    id="enteredEmail"
                    className={classes.input}
                    required
                    value={enteredEmail.value}
                    onChange={(e) =>
                      setEnteredEmail({
                        ...enteredEmail,
                        value: e.target.value,
                      })
                    }
                    onBlur={(e, value) =>
                      validationHandler(e.target.name, enteredEmail.value)
                    }
                  />
                  {enteredEmail.isError && (
                    <span className={classes.error}>{enteredEmail.error}</span>
                  )}
                </div>
                <div className={classes["input-container"]}>
                  <label
                    htmlFor="enteredCMarket"
                    className={classes["input-label"]}
                  >
                    Current Market *:
                  </label>
                  <select
                    name="enteredCMarket"
                    id="enteredCMarket"
                    className={classes.select}
                    placeholder="Current Market You Are in"
                    value={enteredCMarket.value}
                    onChange={(e) =>
                      setEnteredCMarket({
                        ...enteredCMarket,
                        value: e.target.value,
                      })
                    }
                  >
                    <option disabled value="CMarket">
                      Current Market You Are in
                    </option>
                    <option value="ga">Georgia (GA)</option>
                    <option value="ca">California (CA)</option>
                    <option value="fl">Florida (FL)</option>
                  </select>
                </div>
                <div className={classes["input-container"]}>
                  <label
                    htmlFor="enteredHAbout"
                    className={classes["input-label"]}
                  >
                    How did you hear about us? *:
                  </label>
                  <select
                    name="enteredHAbout"
                    id="enteredHAbout"
                    className={classes.select}
                    placeholder="How did you hear about us?"
                    value={enteredHAbout.value}
                    onChange={(e) =>
                      setEnteredHAbout({
                        ...enteredHAbout,
                        value: e.target.value,
                      })
                    }
                  >
                    <option disabled value="HAbout">
                      How did you hear about us?
                    </option>
                    <option value="facebook">Facebook</option>
                    <option value="instagram">Instagram</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="refer">Refer</option>
                  </select>
                </div>
                <button>Get a Quote</button>
              </form>
            </div>
          </motion.div>
        </>,
        ref.current
      )
    : null;
}

export default GetStarted;
