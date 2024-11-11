import classes from "./main-title.module.scss";

function MainTitle(props) {
  return (
    <>
      <div className={classes["main-title"]} data-aos={props.aos}>
        <h2 className={classes.main}>{props.text}</h2>
        <p className={classes.slogan}>{props.slogan}</p>
      </div>
    </>
  );
}

export default MainTitle;
