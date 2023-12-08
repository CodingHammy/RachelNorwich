import Hero from "./components/Hero";
import classes from "./app.module.css";
import { Destination } from "./components/Destination";
import Housing from "./components/Housing";
import { useState } from "react";
import Accommodation from "./components/Accommodation";

function App() {
  const [isActive, setIsActive] = useState('norwich')
  

  const handleClick = (result) => {
    setIsActive(result)
  }

  console.log("411px × 851px");
  return (
    <div className={classes.app}>
      <Hero />
      <Housing onIsActive={(result) => handleClick(result)} isActive={isActive} />
      {isActive === 'accommodation' && <Accommodation/> }
      {isActive === 'norwich' && <Destination />}
    </div>
  );
}

export default App;
