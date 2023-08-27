import MainTitle from "@/components/layout/main-title/MainTitle";
import classes from "./how-it-works.module.scss";

function HowItWorks() {
  return (
    <>
      <div className={classes["how-container"]} id="how-it-works">
        <MainTitle text="The Procces" slogan="How It works?" aos="fade-down" />
        <div className={classes.steps}>
          <div className={classes.timeline}>
            <div className={classes.outer}>
              <div className={classes.card} data-aos="slide-right">
                <div className={classes.info}>
                  <div className={classes["info-left"]}>
                    <h3 className={classes.title}>
                      Propstream Targeted List Generator
                    </h3>
                    <p>
                      Find potential deals by utilizing the most powerful real
                      estate database on the market. PropStream puts the power
                      of data & investor tools you need to pull targeted lists
                      together for your Professional Caller to start generating
                      leads from day one!
                    </p>
                  </div>
                  <div className={classes.img}>
                    <img src="/images/ps.png" />
                  </div>
                </div>
              </div>
              <div className={classes.card} data-aos="slide-left">
                <div className={`${classes.info} ${classes.right}`}>
                  <div className={classes["info-right"]}>
                    <h3 className={classes.title}>
                      Ready Mode Prospecting Platform
                    </h3>
                    <p>
                      Simple yet powerful dialer that includes numerous
                      workflows for different sales call tasks, such as
                      nurturing warm leads, while allowing your Professional
                      Caller to auto-dial up to one-hundred calls per hour.
                    </p>
                  </div>
                  <div className={classes.img}>
                    <img src="/images/xc.png" alt="" />
                  </div>
                </div>
              </div>
              <div className={classes.card} data-aos="slide-right">
                <div className={classes.info}>
                  <div className={classes["info-left"]}>
                    <h3 className={classes.title}>Asana Management System</h3>
                    <p>
                      Manage the wholesale lead process by organizing and
                      tracking your deals inputted by your Quality Manager on
                      the daily basis. After your leads are in the system, all
                      you would have to do is follow up and take your deals to
                      the finish line.
                    </p>
                  </div>
                  <div className={classes.img}>
                    <img src="/images/as.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HowItWorks;
