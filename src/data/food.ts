import { Food } from "./types";

const foodPlaces = [
  "Subway",
  "Mr rice",
  "Pizzeria",
  "Burgerking",
  "Max",
  "Shanghai",
  "Soya",
  "Lyx hamburgare"
];
const foods = foodPlaces.map(place => {
  return {
    checked: false,
    name: place
  } as Food;
});

export default foods;
