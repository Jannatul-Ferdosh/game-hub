import { HStack } from "@chakra-ui/react";
import "./App.css";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";

function App() {
  return (
    <>
      <NavBar />
      <HStack>
        <GenreList/>
        <PlatformSelector/>
      </HStack>
    </>
  );
}

export default App;
