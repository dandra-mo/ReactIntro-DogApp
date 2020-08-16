import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import Results from "./Results";
import useDropdown from "./useDropdown";

//STEP1: searcP rendered, location, breed, animal set
const SearchParams = () => {
  const [location, setLocation] = useState("San Francisco, CA"); // SF is the default
  // this is a hook - always begins with a useSomething (useState, useSomething)
  //   const [animal, setAnimal] = useState("Dog");
  //   const [breed, setBreed] = useState("");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal,
    });
    setPets(animals || []); // when it hits the API, it will be an animal, if no animal, set pets to []
  }

  // useEffect scheduled but run after html set on page
  // will ONLY refun if animal, setbreed, setbreeds change (these are the depenencies)
  // when new animal or breed chosen, it run useEffect again (step3)
  // STEP3: then useEffect run, breeds set to [], breed set to ''
  useEffect(() => {
    // pet.breeds("dog").then(console.log, console.error); // returns a promise; hover over breeds to see; if sucessful - console.log; if unsucessful - console.error
    setBreeds([]);
    setBreed("");

    //STEP4: got to api and get breeds from it and sets setbreeds on the breedstring/ THIS is run once
    pet.breeds(animal).then(({ breeds: apiBreeds }) => {
      const breedStrings = apiBreeds.map(({ name }) => name); // same as breedObj => breedObj.name
      setBreeds(breedStrings);
    }, console.error);
  }, [animal, setBreed, setBreeds]); // these dependencies mean, only rerender if one of these change

  // STEP2: returns this html to the DOM, this is what user on the page see's first
  return (
    <div className="search-params">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="location"
            onChange={(event) => setLocation(event.target.value)}
          ></input>
        </label>
        <AnimalDropdown />
        <BreedDropdown />

        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
