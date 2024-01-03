
import {useState} from "react";
import './App.css';

function App() {
  const [color, setColor] = useState("red");
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: 1964,
    color: "red"
    });

  const handleColorChange = () => {
      setColor(color === "red"? "blue" : "red");
    }
  
  const updateYear = () => {
    setCar({...car, year: 1989});
  }

  return(
    <>
  {/* read */}
   <h1>color is {color}</h1>
  {/* update */}
  <button onClick={handleColorChange} >Change Button Color</button>
  <p> My {car.brand} it is {car.model} from year {car.year}</p>
  {/* delete */}
  <button onClick={() => setCar({brand: "Honda", model: "Accord", year: 2020, color: "blue"})}>Delete Button</button>
  {/* Update */}
  <p>My {car.brand} it is {car.model} from year {car.year}</p>
  <button
    type="button"
    onClick={updateYear}
  >UpdateYear</button>
  </>
  );
}

export default App;
