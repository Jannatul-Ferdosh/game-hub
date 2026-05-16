import { GridItem, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGame from "../hooks/UseGame";
import { useParams } from "react-router-dom";
import GameAttibutes from "./GameAttibutes";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }}>
      <GridItem>
        <Heading marginBottom={2}>{game?.name}</Heading>
        <Text marginBottom="50px">{game?.description_raw}</Text>
        <GameAttibutes game={game} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailsPage;
