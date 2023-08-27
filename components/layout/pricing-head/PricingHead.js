import classes from "./pricing-head.module.scss";

function PricingHead() {
  return (
    <>
      <div className={classes.head}>
        <div className={classes.left} data-aos="fade-left">
          <h2>READY TO HIRE PROFESSIONALS AND CLOSE MORE DEALS?</h2>
        </div>
        <div className={classes.right} data-aos="fade-right">
            <img src="/images/WhatsApp Image 2022-09-26 at 11.20.01 PM.jpeg" alt="" />
        </div>
      </div>
    </>
  );
}

export default PricingHead;
