import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCardSekeleton from "./GameCardSekeleton";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { data, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={5}>
      {isLoading &&
        skeletons.map(() => <GameCardSekeleton></GameCardSekeleton>)}
      {data?.results.map((game) => (
        <GameCard game={game} />
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
