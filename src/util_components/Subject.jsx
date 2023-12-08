import React from 'react'
import classes from './Subject.module.css'

const Subject = ({item, whatLink}) => {


  return (
    <div className={classes.container}>
      
        
        <p className={classes.category}>{item.category}</p>
        <div className={classes.subjectWrap}>
        <img className={classes.image} src={item.image} alt={`The ${item.name}`} />
        <h2>{item.name}</h2>
        <a className={classes.clickMe} target="_blank" rel="noreferrer" href={item.infoLink}>{`Click For ${whatLink}`}</a>
        <p>{item.text}</p>
        <div className={classes.linkContainer}>
        <a className={classes.map} target="_blank" rel="noreferrer" href={`https://www.google.com/maps?q=${item.mapLink}`}>Map</a>
        </div>
        </div>
      
    </div>
  )
}

export default Subject