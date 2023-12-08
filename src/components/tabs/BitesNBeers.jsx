
import React from "react";
import classes from './bites.module.css'
import { drinks } from "../../data/data";

import Subject from "../../util_components/Subject";


const BitesNBeers = () => {
  const items = drinks

  return <div className={classes.container}>
    <div className={classes.padding}>
      {items.map((item, i) => 
        <Subject key={i} item={item} whatLink='The Menu'/>
      )}
    </div>
  </div>;
};

export default BitesNBeers;

