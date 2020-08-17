import React, { useState } from "react"; // React is the default export; 'react' is the react package
import { render } from "react-dom"; // could also import ReactDOM, but we want only specific export from react-dom called render
import { Router, Link } from "@reach/router";
import SearchParams from "./searchParams";
import Details from "./Details";
//import Pet from "./Pet"
import ThemeContext from "./ThemeContext";

// components (App/Pet) are reusable
// Pet components used 3 times to create elements/divs
// or whatever the componnet makes
// Passing attriubutes to componets make them flexible
// use

// step1: create App component (firt letter cap on components)
// App Stamp created to be used however many times
// when called.. 1)there will be a div created, 2)indside the div an h1 is created, then 3) Pet stamp/componnet already created so an element is created with the Pet stamp/compnent (Pet also has a div w an h1 and 2 h2's) so 4) each Pet creates 1 div and 3lines of info
const App = () => {
  // return React.createElement(
  //   "div", // this is kind of tag we're creating
  //   {}, // place for all the attributes for the child element that we want
  //   [
  //     // Pet stamped/component being stamped 3 times
  //     React.createElement("h1", {}, "Adopt Me!"),
  //     React.createElement(Pet, {
  //       name: "Rush",
  //       animal: "Dog",
  //       breed: "Beagle",
  //     }),
  //     React.createElement(Pet, {
  //       name: "Daryl",
  //       animal: "Cat",
  //       breed: "Main Coon ",
  //     }),
  //     React.createElement(Pet, {
  //       name: "Cookie",
  //       animal: "Bird",
  //       breed: "Blue Bird",
  //     }),
  //   ] // these are the children of h1?
  // );
  // JSX version of the code above imported from pet
  // return (
  //   <div>
  //     <h1>"Adopt Me!"</h1>
  //     <Pet name="Rush" animal="Dog" breed="Beagle" />
  //     <Pet name="Daryl" animal="Cat" breed="Main Coon" />
  //     <Pet name="Cookie" animal="Bird" breed="Blue Bird" />
  //   </div>
  // );
  // verion imported from searchParams
  const themeHook = useState("darkblue");

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};
// step2: This stamps the App to the Dom // DOM must be all CAPS
render(
  <App />, // App is the stamp I created, OR it can take a string and make an actual h1, but we're create a stamp so use the entire function
  document.getElementById("root") // where it is going? into Root (id inside div above)
);
