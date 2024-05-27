import "./App.css";
import Leaderboard from "./components/Leaderboard";

import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Card,
  CardContent,
  CardMedia,
  Switch,
  Typography,
} from "@mui/material";
import { MoonStar, SunMedium } from "lucide-react";
const App = () => {
  // state to manage the dark mode
  const [toggleDarkMode, setToggleDarkMode] = useState(false);

  // function to toggle the dark mode as true or false
  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  // applying the primary and secondary theme colors
  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? "dark" : "light", // handle the dark mode state on toggle
      primary: {
        main: "#90caf9",
      },
      secondary: {
        main: "#131052",
      },
    },
  });

  return (
    <>
      <div className="sticky top-0 z-10">
        <nav class="navbar navbar-dark bg-dark  ">
          <div className="px-3 m-8 flex justify-between text-white ">
            <button className="mx-4">Home</button>
            <button className="mx-4 border-b-2"> Dashboard</button>
            <button className="mx-4 ">Features</button>
            <button className="mx-4">About</button>
          </div>
        </nav>
      </div>
      <ThemeProvider  theme={darkTheme}>
        <CssBaseline />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="flex-col relative mt-8 ">
            <button className="absolute right-14 top-2">{toggleDarkMode ? <MoonStar /> : <SunMedium />}</button>
            <Switch checked={toggleDarkMode} onChange={toggleDarkTheme} />
          </div>

          <Leaderboard  mode={ toggleDarkMode}/>
        </div>
      </ThemeProvider>
    </>
  );
};
export default App;
