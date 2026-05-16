import { GridItem, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGame from "../hooks/UseGame";
import { useParams } from "react-router-dom";
import GameAttibutes from "./GameAttibutes";
import GameTariler from "./GameTariler";
import GameScreenshot from "./GameScreenshot";
import ExpandableText from "./ExpandableText";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }}>
      <GridItem>
        <Heading marginBottom={2}>{game?.name}</Heading>
        <ExpandableText>{game?.description_raw}</ExpandableText>
        <GameAttibutes game={game} />
      </GridItem>
      <GridItem>
        <GameTariler gameId={game.id} />
        <GameScreenshot gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailsPage;
