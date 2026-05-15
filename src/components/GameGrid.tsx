import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCardSekeleton from "./GameCardSekeleton";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import InfiniteScroll from "react-infinite-scroll-component";

const GameGrid = () => {
  const { data, isLoading, error, hasNextPage, fetchNextPage } = useGames();
  if(error) return <Text>{error.message}</Text>;
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={5}>
        {isLoading &&
          skeletons.map(() => (
            <GameCardContainer>
              <GameCardSekeleton />
            </GameCardContainer>
          ))}
        {data?.pages.map((page) => (
          <>
            {page.results.map((game) => (
              <GameCardContainer>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
