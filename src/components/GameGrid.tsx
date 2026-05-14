import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCardSekeleton from "./GameCardSekeleton";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { data, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={5}>
      {isLoading &&
        skeletons.map(() => (
          <GameCardContainer>
            <GameCardSekeleton />
          </GameCardContainer>
        ))}
      {data?.results.map((game) => (
        <GameCardContainer>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
