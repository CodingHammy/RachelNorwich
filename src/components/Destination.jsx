import React, { useState } from "react";
import classes from "./Destination.module.css";
import FoodWine from "./tabs/FoodWine";
import BitesNBeers from "./tabs/BitesNBeers";
import Attractions from "./tabs/Attractions";

export const Destination = () => {
  const [isActive, setIsActive] = useState("BitesNBeers");

  const handleClick = (name) => {
    setIsActive(name);
  };

  return (
    <section className={classes.container}>
      <div className={classes.buttonContainer}>
        <button
          onClick={() => handleClick("Food/Wine")}
          className={`${classes.button} ${
            isActive === "Food/Wine" && classes.active
          }`}
        >
          Food/Wine & Brunch
        </button>
        <button
          onClick={() => handleClick("BitesNBeers")}
          className={`${classes.button} ${
            isActive === "BitesNBeers" && classes.active
          }`}
        >
          Bites/Beers & More
        </button>
        <button
          onClick={() => handleClick("Attractions")}
          className={`${classes.button} ${
            isActive === "Attractions" && classes.active
          }`}
        >
          Walks/Museums & Shops
        </button>
      </div>
      {isActive === "Food/Wine" && <FoodWine />}
      {isActive === "BitesNBeers" && <BitesNBeers />}
      {isActive === "Attractions" && <Attractions />}
    </section>
  );
};
