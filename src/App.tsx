import React, { useState } from "react";
import "./App.css";
import foods from "./data/food";
import { Food } from "./data/types";

const App = () => {
  const [foodOptions, setFoodOptions] = useState(foods);
  const [randomFood, setRandomFood] = useState("");

  const updateCheck = (food: Food) => {
    const currentFoodOptions = JSON.parse(
      JSON.stringify(foodOptions)
    ) as Food[];
    const updatedFoodOptions = currentFoodOptions.map(option => {
      if (option.name === food.name) {
        return {
          name: food.name,
          checked: !food.checked
        } as Food;
      }
      return option;
    });
    setFoodOptions(updatedFoodOptions);
  };

  const randomizeFood = () => {
    const checkedOptions = foodOptions.filter(food => food.checked);
    const randomFood =
      checkedOptions[Math.floor(Math.random() * checkedOptions.length)];
    setRandomFood(randomFood.name);
  };
  return (
    <div className="App">
      <header className="App-header">
        <form action="">
          <ul>
            {foodOptions.map(food => {
              return (
                <li>
                  <input
                    type="checkbox"
                    name={food.name}
                    value={food.name}
                    checked={food.checked}
                    onChange={() => updateCheck(food)}
                  ></input>
                  {food.name}
                </li>
              );
            })}
          </ul>
        </form>
        <button onClick={() => randomizeFood()}>Randomize</button>
        <h2>{randomFood}</h2>
      </header>
    </div>
  );
};

export default App;
