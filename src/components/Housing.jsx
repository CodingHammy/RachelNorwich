import React from 'react'
import classes from './Housing.module.css'

const Housing = ({onIsActive, isActive}) => {

const handleClick = (result) => {
  onIsActive(result)
}
  return (
    <div className={classes.container}>
      <div className={classes.buttonContainer}>
      <button onClick={() => handleClick('accommodation')} className={`${classes.button} ${isActive === 'accommodation' && classes.activeRight}`}>Accommodation</button>
      <button onClick={() => handleClick('norwich')} className={`${classes.button} ${isActive === 'norwich' && classes.activeLeft}`}>Norwich</button>
      </div>
    </div>
  )
}

export default Housing