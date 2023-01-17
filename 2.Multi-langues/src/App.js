import React from "react";
import Contenu from './Components/Contenu/Contenu';
import ToggleLangs from "./Components/ToggleLangs/ToggleLangs";
import ContextProvider from "./Components/context/langContext";

// Nos composants sont entourés par un contect
// (= ils connaissent et dependent de ce contexte)
function App() {
  return (
    <ContextProvider>
      <ToggleLangs/>
      <Contenu/>
    </ContextProvider>
  );
}

export default App;
