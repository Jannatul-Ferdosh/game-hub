import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import GameGrid from "./components/GameGrid";

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
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector />
            </Box>
            <SortSelector />
          </Flex>
          <GameGrid/>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
