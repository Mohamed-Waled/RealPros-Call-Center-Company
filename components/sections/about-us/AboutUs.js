import classes from "./about-us.module.scss";
import MainTitle from "@/components/layout/main-title/MainTitle";

function AboutUs() {
  return (
    <>
      <div id="about-us" className={classes["about-us"]}>
        <div className={classes.top}>
          <MainTitle
            text="Who are we?"
            slogan="Your business partners."
            aos="fade-down"
          />
          <div className={classes.between} data-aos="slide-right">
            <img src="/images/5124556.png" alt="Call Center Guy" />
          </div>
          <p className={classes.description} data-aos="fade-up">
            We know what it takes to succeed in real estate, and we can help you
            drive your business to new heights. We start by understanding your
            business goals and then tailor our services to help you achieve
            them.
          </p>
        </div>
        <div className={classes.bottom} data-aos="slide-right">
          <img src="/images/5124556.png" alt="Call Center Guy" />
        </div>
      </div>
    </>
  );
}

export default AboutUs;
