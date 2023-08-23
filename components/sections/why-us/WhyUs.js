import classes from "./why-us.module.scss";
import MainTitle from "@/components/layout/main-title/MainTitle";

function WhyUs() {
  return (
    <>
      <MainTitle
        text="Why Real Pros?"
        slogan="We are here for you."
        aos="fade-down"
      />
      <div className={classes.all}>
        <div className={classes.photo} data-aos="slide-left">
          <img src="/images/5138237.png" alt="" />
        </div>
        <div className={classes.why}>
          <div className={classes.box} data-aos="slide-right">
            <div className={classes.left}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 640 512"
              >
                <path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z" />
              </svg>
            </div>
            <div className={classes.right}>
              <h3>Our Team – More than just cold calling</h3>
              <p>
                We don’t just cold call! We will help you pull a list from
                Propstream, close deals, and so much more. We’re here to help
                you!
              </p>
            </div>
          </div>
          <div className={classes.box} data-aos="slide-right">
            <div className={classes.left}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M160 0c-23.7 0-44.4 12.9-55.4 32H48C21.5 32 0 53.5 0 80V400c0 26.5 21.5 48 48 48H192V176c0-44.2 35.8-80 80-80h48V80c0-26.5-21.5-48-48-48H215.4C204.4 12.9 183.7 0 160 0zM272 128c-26.5 0-48 21.5-48 48V448v16c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V256H416c-17.7 0-32-14.3-32-32V128H320 272zM160 40a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm256 88v96h96l-96-96z" />
              </svg>
            </div>
            <div className={classes.right}>
              <h3>DAILY REPORTS AND ACTIVE DASHBOARD</h3>
              <p>
                At the end of the day, you will receive a report with all the
                Hot and Warm leads generated for that day. You will also have
                access to your own live sales dashboard showing the progress of
                your list & leads generated throughout the month.
              </p>
            </div>
          </div>
          <div className={classes.box} data-aos="slide-right">
            <div className={classes.left}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 576 512"
              >
                <path d="M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6H426.6c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z" />
              </svg>
            </div>
            <div className={classes.right}>
              <h3>Quality – Highest Trained VA’s</h3>
              <p>
                Our VA’s are the highest quality and professionally trained!
              </p>
            </div>
          </div>
          <div className={classes.box} data-aos="slide-right">
            <div className={classes.left}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z" />
              </svg>
            </div>
            <div className={classes.right}>
              <h3>We’ve got your back!</h3>
              <p>
                Our team of Professional Callers are trained to get you quality
                leads in no time!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyUs;
