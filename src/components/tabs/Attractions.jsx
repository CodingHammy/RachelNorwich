import React from "react";
import classes from './Attract.module.css'
import Subject from "../../util_components/Subject";
import { Activitys } from "../../data/data";

const Attractions = () => {
  const items = Activitys

  return <div className={classes.container}>
    <div className={classes.padding}>
      {items.map((item) => 
        <Subject key={item.name} item={item} whatLink='More Info'/>
      )}
    </div>
  </div>;
};

export default Attractions;
