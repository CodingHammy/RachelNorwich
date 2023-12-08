import React from "react";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.container}>
      <div className={classes.overlay}>
        <h2 className={classes.header}>
          Merry Christmas <span className={classes.rachel}>Rachel</span>
        </h2>
        <div className={classes.snowflakes}>
          <div className={classes.snowflake}>
            <div className={classes.inner}>❅</div>
          </div>
          <div className={classes.snowflake}>
            <div className={classes.inner}>❅</div>
          </div>
          <div className={classes.snowflake}>
            <div className={classes.inner}>❅</div>
          </div>
          <div className={classes.snowflake}>
            <div className={classes.inner}>❅</div>
          </div>
          <div className={classes.snowflake}>
            <div className={classes.inner}>❅</div>
          </div>
          <div className={classes.snowflake}>
            <div className={classes.inner}>❅</div>
          </div>
          <div className={classes.snowflake}>
            <div className={classes.inner}>❅</div>
          </div>
          <div className={classes.snowflake}>
            <div className={classes.inner}>❅</div>
          </div>
          <div className={classes.snowflake}>
            <div className={classes.inner}>❅</div>
          </div>
          <div className={classes.snowflake}>
            <div className={classes.inner}>❅</div>
          </div>
          <div className={classes.snowflake}>
            <div className={classes.inner}>❅</div>
          </div>
          <div className={classes.snowflake}>
            <div className={classes.inner}>❅</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
