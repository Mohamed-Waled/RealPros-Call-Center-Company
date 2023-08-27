import { useState, useContext } from "react";
import MainContext from "@/context/main-context";
import PhoneInput from "react-phone-input-2";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";
import MainTitle from "@/components/layout/main-title/MainTitle";
import "react-phone-input-2/lib/style.css";
import classes from "./contact-form.module.scss";
import GetAQuote from "../../modals/get-a-quote/GetAQuote";

async function sendingContactData(contactDetails) {
  if (contactDetails.first_name.length > 50) {
    throw new Error("your first name should be less than 50 characters");
  }
  if (contactDetails.first_name.trim() === "") {
    throw new Error("Please enter your first name");
  }
  if (
    !contactDetails.first_name.match(/^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i)
  ) {
    throw new Error(
      "Make sure there is no numbers in the first name or any special character"
    );
  }

  if (contactDetails.last_name.length > 50) {
    throw new Error("your last name should be less than 50 characters");
  }
  if (contactDetails.last_name.trim() === "") {
    throw new Error("Please enter your last name");
  }
  if (
    !contactDetails.last_name.match(/^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i)
  ) {
    throw new Error(
      "Make sure there is no numbers in the last name or any special character"
    );
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

  if (contactDetails.message.length > 500) {
    throw new Error("your message should be less than 500 characters");
  }
  if (contactDetails.message.trim() === "") {
    throw new Error("Please enter your message");
  }

  // const res = await fetch(
  //   "http://192.168.1.3:8000/realpros/public/api/contact",
  //   {
  //     method: "POST",
  //     body: JSON.stringify(contactDetails),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }
  // );

  const res = await fetch("https://fakestoreapi.com/carts", {
    method: "POST",
    body: JSON.stringify(contactDetails),
  });

  if (!res.ok) {
    throw new Error(data.message || "Something went wrong!");
  }

  const data = await res.json();
}

function ContactForm() {
  const [enteredFName, setEnteredFName] = useState({
    value: "",
    error: "",
    isError: "",
  });
  const [enteredLName, setEnteredLName] = useState({
    value: "",
    error: "",
    isError: "",
  });
  const [enteredEMail, setEnteredEMail] = useState({
    value: "",
    error: "",
    isError: "",
  });
  const [enteredPhone, setEnteredPhone] = useState({
    value: "",
    error: "",
    isError: "",
  });
  const [enteredMessage, setEnteredMessage] = useState({
    value: "",
    error: "",
    isError: "",
  });

  const Ctx = useContext(MainContext);

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
    if (name === "enteredLName") {
      if (value.length > 50) {
        setEnteredLName({
          ...enteredLName,
          isError: true,
          error: "Please enter last name less than 50 characters",
        });
      } else if (value.trim() === "") {
        setEnteredLName({
          ...enteredLName,
          isError: true,
          error: "Please enter your last name",
        });
      } else if (!value.match(/^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i)) {
        setEnteredLName({
          ...enteredLName,
          isError: true,
          error:
            "Make sure there is no numbers in the name or any special character",
        });
      } else {
        setEnteredLName({
          ...enteredLName,
          isError: false,
          error: "",
        });
      }
    }
    if (name === "enteredEMail") {
      if (value.trim() === "") {
        setEnteredEMail({
          ...enteredEMail,
          isError: true,
          error: "Please enter your e-mail",
        });
      } else if (
        !value.match(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        )
      ) {
        setEnteredEMail({
          ...enteredEMail,
          isError: true,
          error: "Please enter a valid e-mail",
        });
      } else {
        setEnteredEMail({
          ...enteredEMail,
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
    if (name === "enteredMessage") {
      if (value.length > 500) {
        setEnteredMessage({
          ...enteredMessage,
          isError: true,
          error: "Please enter message less than 500 characters",
        });
      } else if (value.trim() === "") {
        setEnteredMessage({
          ...enteredMessage,
          isError: true,
          error: "Please enter your message",
        });
      } else {
        setEnteredMessage({
          ...enteredMessage,
          isError: false,
          error: "",
        });
      }
    }
  }

  async function sendContactDataHandler(e) {
    e.preventDefault();

    const newMessage = {
      first_name: enteredFName.value,
      last_name: enteredLName.value,
      email: enteredEMail.value,
      phone: enteredPhone.value,
      message: enteredMessage.value,
    };

    toast.promise(
      sendingContactData(newMessage),
      {
        pending: "Sending...",
        success: {
          render() {
            setEnteredFName({ value: "", error: "", isError: "" });
            setEnteredLName({ value: "", error: "", isError: "" });
            setEnteredEMail({ value: "", error: "", isError: "" });
            setEnteredPhone({ value: "", error: "", isError: "" });
            setEnteredMessage({ value: "", error: "", isError: "" });
            Ctx.showDiscovery();
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

  return (
    <>
      <div className={classes["contact-form"]} id="contact-form">
        <MainTitle
          text="Contact Us"
          slogan="Let's Get You a Quote."
          aos="fade-down"
        />
        <div className={classes.contact}>
          <div className={classes.left} data-aos="slide-right">
            <h2>You Will Hear From Us Very Soon!</h2>
            <p>
              Maximize your productivity with a cloud-based, all-in-one
              predictive dialer. Connect with more leads in less time.
            </p>
            <p>
              RealPros offers flexible pricing options to help you achieve your
              business goals. Depending on your number of users, we offer
              monthly and yearly service agreements. To learn more, please fill
              out the form.
            </p>
            <div className={classes.right} data-aos="zoom-up">
              <form onSubmit={sendContactDataHandler}>
                <div className={classes["input-container"]}>
                  <label
                    htmlFor="enteredFName"
                    className={classes["input-label"]}
                  >
                    First Name *:
                  </label>
                  <input
                    type="text"
                    placeholder="Write Your First Name Here!"
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
                    htmlFor="enteredLName"
                    className={classes["input-label"]}
                  >
                    Last Name *:
                  </label>
                  <input
                    type="text"
                    placeholder="Write Your Last Name Here!"
                    name="enteredLName"
                    id="enteredLName"
                    required
                    className={classes.input}
                    value={enteredLName.value}
                    onChange={(e) =>
                      setEnteredLName({
                        ...enteredLName,
                        value: e.target.value,
                      })
                    }
                    onBlur={(e, value) =>
                      validationHandler(e.target.name, enteredLName.value)
                    }
                  />
                  {enteredLName.isError && (
                    <span className={classes.error}>{enteredLName.error}</span>
                  )}
                </div>
                <div className={classes["input-container"]}>
                  <label
                    htmlFor="enteredEMail"
                    className={classes["input-label"]}
                  >
                    E-mail *:
                  </label>
                  <input
                    type="email"
                    placeholder="Write Your Email Here!"
                    name="enteredEMail"
                    id="enteredEMail"
                    required
                    className={classes.input}
                    value={enteredEMail.value}
                    onChange={(e) =>
                      setEnteredEMail({
                        ...enteredEMail,
                        value: e.target.value,
                      })
                    }
                    onBlur={(e, value) =>
                      validationHandler(e.target.name, enteredEMail.value)
                    }
                  />
                  {enteredEMail.isError && (
                    <span className={classes.error}>{enteredEMail.error}</span>
                  )}
                </div>
                <div className={classes["input-container"]}>
                  <label
                    htmlFor="enteredPhone"
                    className={classes["phone-label"]}
                  >
                    Phone *:
                  </label>
                  <PhoneInput
                    inputClass={`${classes["phone-input"]}`}
                    dropdownClass={classes.dropdown}
                    buttonClass={classes["dropdown-button"]}
                    country={"us"}
                    inputProps={{
                      id: "enteredPhone",
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
                  <label
                    htmlFor="enteredMessage"
                    className={classes["input-label"]}
                  >
                    Your Message *:
                  </label>
                  <textarea
                    name="enteredMessage"
                    id="enteredMessage"
                    placeholder="Write Your Message Here!"
                    className={classes.input}
                    rows="3"
                    required
                    value={enteredMessage.value}
                    onChange={(e) =>
                      setEnteredMessage({
                        ...enteredMessage,
                        value: e.target.value,
                      })
                    }
                    onBlur={(e, value) =>
                      validationHandler(e.target.name, enteredMessage.value)
                    }
                  />
                  {enteredMessage.isError && (
                    <span className={classes.error}>
                      {enteredMessage.error}
                    </span>
                  )}
                </div>
                <button>CONTACT US</button>
              </form>
            </div>
          </div>
        </div>
        {Ctx.discovery && (
          <GetAQuote url="https://calendly.com/jacob-dawson201/internal-team" />
        )}
      </div>
    </>
  );
}

export default ContactForm;
