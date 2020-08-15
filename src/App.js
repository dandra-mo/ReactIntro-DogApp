// step3: Create another component/another stamp to use
// const Pet = (props) => {
//     return React.createElement("div", {}, [
//         React.createElement("h1", {}, props.name),
//         React.createElement("h2", {}, props.animal),
//         React.createElement("h2", {}, props.breed)
//     ]);
// };

// Destructuring props
const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

// components (App/Pet) are reusable
// Pet components used 3 times to create elements/divs
// or whatever the componnet makes
// Passing attriubutes to componets make them flexible
// use

// step1: create App component (firt letter cap on components)
// App Stamp created to be used however many times
// when called.. 1)there will be a div created, 2)indside the div an h1 is created, then 3) Pet stamp/componnet already created so an element is created with the Pet stamp/compnent (Pet also has a div w an h1 and 2 h2's) so 4) each Pet creates 1 div and 3lines of info
const App = () => {
  return React.createElement(
    "div", // this is kind of tag we're creating
    {}, // place for all the attributes for the child element that we want
    [
      // Pet stamped/component being stamped 3 times
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, {
        name: "Rush",
        animal: "Dog",
        breed: "Beagle",
      }),
      React.createElement(Pet, {
        name: "Daryl",
        animal: "Cat",
        breed: "Main Coon ",
      }),
      React.createElement(Pet, {
        name: "Cookie",
        animal: "Bird",
        breed: "Blue Bird",
      }),
    ] // these are the children of h1?
  );
};
// step2: This stamps the App to the Dom // DOM must be all CAPS
ReactDOM.render(
  React.createElement(App), // App is the stamp I created, OR it can take a string and make an actual h1, but we're create a stamp so use the entire function
  document.getElementById("root") // where it is going? into Root (id inside div above)
);
