const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const liListIngr = ingredients.forEach(function (ingredient) {
  const liList = document.createElement("li");
  liList.textContent = ingredient;
console.log(liList);
});
