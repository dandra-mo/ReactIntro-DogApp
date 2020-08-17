import { createContext } from "react";

const ThemeContext = createContext(["green", () => {}]); // this is a hook, state: green, updater: fuction

export default ThemeContext;
