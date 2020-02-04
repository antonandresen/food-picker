import React, { useState } from "react";
import styled from "styled-components";

import "./App.css";
import foods from "./data/food";
import { Food } from "./data/types";

const List = styled.ul`
  list-style: none;
`;

const Button = styled.button`
  padding: 1rem;
  font-size: 2rem;
  margin: 0.5rem;
`;

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
    if (checkedOptions.length === 0) return setRandomFood("noob bruh");
    const randomFood =
      checkedOptions[Math.floor(Math.random() * checkedOptions.length)];
    setRandomFood(randomFood.name);
  };

  const selectAll = () => {
    const optionsCopy = JSON.parse(JSON.stringify(foodOptions)) as Food[];
    const isAllChecked = optionsCopy.filter(opt => !opt.checked).length === 0;
    optionsCopy.forEach(opt => {
      opt.checked = !isAllChecked;
    });
    setFoodOptions(optionsCopy);
  };
  return (
    <div className="App">
      <header className="App-header">
        <form action="">
          <List>
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
          </List>
        </form>
        <Button onClick={() => selectAll()}>Select All</Button>
        <Button onClick={() => randomizeFood()}>Randomize</Button>
        <h2>{randomFood}</h2>
      </header>
    </div>
  );
};

export default App;
