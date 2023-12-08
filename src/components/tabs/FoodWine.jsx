import React from "react";
import classes from './Food.module.css'
import { Food } from "../../data/data";

import Subject from "../../util_components/Subject";


const foodWine = () => {
  const items = Food

  return <div className={classes.container}>
    <div className={classes.padding}>
      {items.map((item, i) => 
        <Subject key={i} item={item} whatLink='The Menu'/>
      )}
    </div>
  </div>;
};

export default foodWine;
