const country = {
  one: "Republic of Korea",
  two: "Afreeca",
  three: "United States",
};
console.log(country.two);

country.two = "Canada";
console.log(country.two);

const swInfo = {
  name: "SangWook",
  age: 28,
  city: "Seoul",
  fatty: false,
  favMovies: ["BigFish", "HarryPorter", "Soul"],
  favFoods: [
    { name: "Chicken", protein: true },
    { name: "Sashimi", protein: true },
  ],
};

console.log(swInfo.favFoods[1].name);
