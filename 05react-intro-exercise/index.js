const selectRoot = document.getElementById("root");

const items = [
  "1 cup Fresh Basil",
  "1 cup Pine Nuts",
  "2 cups Butter Lettuce",
  "1 Yellow Squash",
  "1/2 cup Olive Oil",
  "3 cloves of Garlic"
];

const ingredientsList = React.createElement(
  "ul", {
    className: "ingredients"
  },
  items.map((ingredient, i) => React.createElement("li", {
    id: i
  }, ingredient))
);


const rootElement = React.createElement("div", null, ingredientsList)

ReactDOM.render(rootElement, selectRoot);