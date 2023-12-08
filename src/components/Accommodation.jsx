import React from 'react'
import classes from './Accommodation.module.css'

const Accommodation = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <img className={classes.image} src='https://a0.muscache.com/im/pictures/miso/Hosting-658630388150679411/original/9b18d75e-cac3-43de-b764-ed43704ec334.jpeg?im_w=960' alt='the apartment' />
        <h2 className={classes.header}>Entire apartment</h2>
        <p className={classes.date}>March 22<sup className={classes.sup}>nd</sup> to 24<sup className={classes.sup}>th</sup> </p>
        <a className={classes.clickMe} target="_blank" rel="noreferrer" href='https://www.airbnb.co.uk/rooms/658630388150679411?source_impression_id=p3_1702048808_uHVuXGPlhrs%2FgLq1'>Airbnb Page</a>
        <p>A lovely refurbished flat in the heart of Norwich, as you enter the property there is a little shower and toilet downstairs, a good sized corner sofa bed, with a television, a DAB radio in the kitchen, with a fridge cooker, washing machine. The flat has underfloor heating downstairs, and a nice little electric heater upstairs to keep you nice and cosy if it’s needed.</p>
        <div className={classes.linkContainer}>
        <a className={classes.map} target="_blank" rel="noreferrer" href={`https://www.google.com/maps?q=Waggon and Horses Lane, Norwich`}>Map</a>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Accommodation



