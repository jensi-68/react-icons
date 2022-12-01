import logo from './logo.svg';
import './App.css';
// import { IconName } from "react-icons/di";
import { AiFillTwitterCircle } from "react-icons/ai";
import {DiApple} from "react-icons/di";
import {FiCoffee} from "react-icons/fi";
import { FcTouchscreenSmartphone } from "react-icons/fc";
import { BiBuildingHouse } from "react-icons/bi";
import { FaRegGrinTongueSquint } from "react-icons/fa";
import { GiSeaTurtle } from "react-icons/gi";
import { GrInstagram } from "react-icons/gr";

// import { FaPoop } from "react-icons/fa";

function App() {
  return (
    <>
    
    {/* <IconName/> */}
    <div className="navbar-header">
          <AiFillTwitterCircle />
          <DiApple/>
          <FiCoffee/>
          <FcTouchscreenSmartphone/>
          <BiBuildingHouse/>
          {/* <FaPoop/> */}
          <FaRegGrinTongueSquint/>
          <GiSeaTurtle/>
          <GrInstagram/>
          </div>
    </>
  );
}

export default App;
