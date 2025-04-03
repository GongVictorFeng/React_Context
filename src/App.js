import React from "react";
import "./App.css";
import ThemeProvider from "./context/ThemeProvider";
import ComponentA from "./components/ComponentA";

function App() {
  return (
    <ThemeProvider>
      <ComponentA></ComponentA>
    </ThemeProvider>
  );
}

export default App;
