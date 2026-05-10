import { HStack } from "@chakra-ui/react";
import "./App.css";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

function App() {
  return (
    <>
      <NavBar />
      <HStack>
        <GenreList />
        <HStack>
          <PlatformSelector />
          <SortSelector />
        </HStack>
      </HStack>
    </>
  );
}

export default App;
