import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameCardSekeleton from "./components/GameCardSekeleton";
import GameHeading from "./components/GameHeading";

function App() {
  return (
    <>
      <NavBar />
      <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "250px 1fr",
        }}
        margin={4}
      >
        <Show above="lg">
          <GridItem area="aside">
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameHeading/>
          <Flex>
            <Box marginRight={5}>
              <PlatformSelector />
            </Box>
            <SortSelector />
          </Flex>
        </GridItem>
        <GameCardSekeleton/>
      </Grid>
    </>
  );
}

export default App;
