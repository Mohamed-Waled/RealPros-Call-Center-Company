import MainTitle from "@/components/layout/main-title/MainTitle";
import classes from "./pricing-plans.module.scss";
import Link from "next/link";
import { useState, useEffect } from "react";

function PricingPlans() {
  const [plans, setPlans] = useState([]);

  // useEffect(() => {
  //   fetch("http://192.168.1.3:8000/realpros/public/api/plans")
  //     .then((res) => res.json())
  //     .then((plans) => setPlans(plans.data));
  // }, []);

  // function clickCounter(name) {
  //   fetch(`http://192.168.1.3:8000/realpros/public/api/${name.toLowerCase()}`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }

  return (
    <>
      <div className={classes["pricing-plans"]} id="pricing-plans">
        <MainTitle
          text="Pricing Plans"
          slogan="We Offer You Planets."
          aos="fade-down"
        />
        <div className={classes.plans}>
          {/* {plans &&
            plans.map((plan) => {
              return (
                <div
                  className={classes.plan}
                  data-aos="fade-up"
                  data-aos-once="true"
                  key={plan.id}
                >
                  <div
                    className={classes.top}
                    data-aos="zoom-in"
                    data-aos-delay="1000"
                    data-aos-once="true"
                  >
                    <div
                      className={`${classes.icon}`}
                      style={{
                        backgroundImage: `url(/images/${plan.name}.jpg)`,
                      }}
                    >
                      <img src={`/images/${plan.name}.png`} alt="Earth Icon" />
                    </div>
                  </div>
                  <div className={classes.bottom}>
                    <div
                      className={classes.title}
                      data-aos="fade-up"
                      data-aos-delay="1100"
                      data-aos-once="true"
                    >
                      <h3>{plan.name}</h3>
                      <p>{plan.title}</p>
                    </div>
                    <div className={classes.features}>
                      <h4
                        data-aos="fade-right"
                        data-aos-delay="1200"
                        data-aos-once="true"
                      >
                        Services:
                      </h4>
                      <ul>
                        <li
                          data-aos="fade-right"
                          data-aos-delay="1300"
                          data-aos-once="true"
                        >
                          {plan.service1}
                        </li>
                        <li
                          data-aos="fade-right"
                          data-aos-delay="1400"
                          data-aos-once="true"
                        >
                          {plan.service2}
                        </li>
                        <li
                          data-aos="fade-right"
                          data-aos-delay="1500"
                          data-aos-once="true"
                        >
                          {plan.service3}
                        </li>
                        <li
                          data-aos="fade-right"
                          data-aos-delay="1600"
                          data-aos-once="true"
                        >
                          {plan.service4}
                        </li>
                      </ul>
                    </div>
                    <div
                      className={classes.price}
                      data-aos="fade-up"
                      data-aos-delay="1700"
                      data-aos-once="true"
                    >
                      <h5>{`$${plan.price} USD`}</h5>
                      <p>{plan.priceDesc}</p>
                    </div>
                    <div
                      className={classes.cta}
                      data-aos="fade-up"
                      data-aos-delay="1800"
                      data-aos-offset="0"
                      data-aos-once="true"
                    >
                      <Link
                        href="#contact-form"
                        onClick={() => clickCounter(plan.name)}
                      >
                        Get a Quote
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })} */}
          <div className={classes.plan} data-aos="fade-up" data-aos-once="true">
            <div
              className={classes.top}
              data-aos="zoom-in"
              data-aos-delay="1000"
              data-aos-once="true"
            >
              <div
                className={`${classes.icon}`}
                style={{
                  backgroundImage: `url(/images/earth.jpg)`,
                }}
              >
                <img src={`/images/earth.png`} alt="Earth Icon" />
              </div>
            </div>
            <div className={classes.bottom}>
              <div
                className={classes.title}
                data-aos="fade-up"
                data-aos-delay="1100"
                data-aos-once="true"
              >
                <h3>Earth</h3>
                <p>
                  For individual and small teams starting out growing their
                  businesses.
                </p>
              </div>
              <div className={classes.features}>
                <h4
                  data-aos="fade-right"
                  data-aos-delay="1200"
                  data-aos-once="true"
                >
                  Services:
                </h4>
                <ul>
                  <li
                    data-aos="fade-right"
                    data-aos-delay="1300"
                    data-aos-once="true"
                  >
                    Standard Support 1
                  </li>
                  <li
                    data-aos="fade-right"
                    data-aos-delay="1400"
                    data-aos-once="true"
                  >
                    Live Webinars
                  </li>
                  <li
                    data-aos="fade-right"
                    data-aos-delay="1500"
                    data-aos-once="true"
                  >
                    12 Dialer CPA
                  </li>
                  <li
                    data-aos="fade-right"
                    data-aos-delay="1600"
                    data-aos-once="true"
                  >
                    1 Basic Integration 3
                  </li>
                </ul>
              </div>
              <div
                className={classes.price}
                data-aos="fade-up"
                data-aos-delay="1700"
                data-aos-once="true"
              >
                <h5>{`$125 USD`}</h5>
                <p>per license, per month billed annually</p>
              </div>
              <div
                className={classes.cta}
                data-aos="fade-up"
                data-aos-delay="1800"
                data-aos-offset="0"
                data-aos-once="true"
              >
                <Link href="#contact-form">Get a Quote</Link>
              </div>
            </div>
          </div>
          <div className={classes.plan} data-aos="fade-up" data-aos-once="true">
            <div
              className={classes.top}
              data-aos="zoom-in"
              data-aos-delay="1000"
              data-aos-once="true"
            >
              <div
                className={`${classes.icon}`}
                style={{
                  backgroundImage: `url(/images/mars.jpg)`,
                }}
              >
                <img src={`/images/mars.png`} alt="Earth Icon" />
              </div>
            </div>
            <div className={classes.bottom}>
              <div
                className={classes.title}
                data-aos="fade-up"
                data-aos-delay="1100"
                data-aos-once="true"
              >
                <h3>Mars</h3>
                <p>
                  For small and medium sized sales teams looking to connect to
                  more clients.
                </p>
              </div>
              <div className={classes.features}>
                <h4
                  data-aos="fade-right"
                  data-aos-delay="1200"
                  data-aos-once="true"
                >
                  Services:
                </h4>
                <ul>
                  <li
                    data-aos="fade-right"
                    data-aos-delay="1300"
                    data-aos-once="true"
                  >
                    Unlimited Support 1
                  </li>
                  <li
                    data-aos="fade-right"
                    data-aos-delay="1400"
                    data-aos-once="true"
                  >
                    Personalized Onboarding 2
                  </li>
                  <li
                    data-aos="fade-right"
                    data-aos-delay="1500"
                    data-aos-once="true"
                  >
                    12 Dialer CPA
                  </li>
                  <li
                    data-aos="fade-right"
                    data-aos-delay="1600"
                    data-aos-once="true"
                  >
                    Basic Integrations or Advanced Integrations
                  </li>
                </ul>
              </div>
              <div
                className={classes.price}
                data-aos="fade-up"
                data-aos-delay="1700"
                data-aos-once="true"
              >
                <h5>{`$100 USD`}</h5>
                <p>per license, per month billed annually</p>
              </div>
              <div
                className={classes.cta}
                data-aos="fade-up"
                data-aos-delay="1800"
                data-aos-offset="0"
                data-aos-once="true"
              >
                <Link href="#contact-form">Get a Quote</Link>
              </div>
            </div>
          </div>
          <div className={classes.plan} data-aos="fade-up" data-aos-once="true">
            <div
              className={classes.top}
              data-aos="zoom-in"
              data-aos-delay="1000"
              data-aos-once="true"
            >
              <div
                className={`${classes.icon}`}
                style={{
                  backgroundImage: `url(/images/jupiter.jpg)`,
                }}
              >
                <img src={`/images/jupiter.png`} alt="Earth Icon" />
              </div>
            </div>
            <div className={classes.bottom}>
              <div
                className={classes.title}
                data-aos="fade-up"
                data-aos-delay="1100"
                data-aos-once="true"
              >
                <h3>Jupiter</h3>
                <p>
                  For medium and large sales organizations with advanced dialing
                  needs.
                </p>
              </div>
              <div className={classes.features}>
                <h4
                  data-aos="fade-right"
                  data-aos-delay="1200"
                  data-aos-once="true"
                >
                  Services:
                </h4>
                <ul>
                  <li
                    data-aos="fade-right"
                    data-aos-delay="1300"
                    data-aos-once="true"
                  >
                    VIP Support 1
                  </li>
                  <li
                    data-aos="fade-right"
                    data-aos-delay="1400"
                    data-aos-once="true"
                  >
                    Dedicated CSM
                  </li>
                  <li
                    data-aos="fade-right"
                    data-aos-delay="1500"
                    data-aos-once="true"
                  >
                    28+ Dialer CPA
                  </li>
                  <li
                    data-aos="fade-right"
                    data-aos-delay="1600"
                    data-aos-once="true"
                  >
                    Unlimited Integrations
                  </li>
                </ul>
              </div>
              <div
                className={classes.price}
                data-aos="fade-up"
                data-aos-delay="1700"
                data-aos-once="true"
              >
                <h5>CONTACT US</h5>
                <p>Special price customized for you.</p>
              </div>
              <div
                className={classes.cta}
                data-aos="fade-up"
                data-aos-delay="1800"
                data-aos-offset="0"
                data-aos-once="true"
              >
                <Link href="#contact-form">Get a Quote</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PricingPlans;
