import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const searchParams = () => {
  const [location, setLocation] = useState("San Francisco, CA"); // SF is the default
  // this is a hook - always begins with a useSomething (useState, useSomething)
  //   const [animal, setAnimal] = useState("Dog");
  //   const [breed, setBreed] = useState("");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);

  return (
    <div className="search-params">
      <form>
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
    </div>
  );
};

export default searchParams;
