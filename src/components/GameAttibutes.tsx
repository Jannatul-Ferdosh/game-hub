import { GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import type { Game } from "../entities/Game";

interface Props {
  game: Game;
}

const GameAttibutes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2}>
      <GridItem marginBottom="50px">
        <Heading as='dt' fontSize='2xl' paddingBottom={2}>{"Platforms"}</Heading>
        {game.parent_platforms.map((p)=><dd>{p.platform.name}</dd>)}
      </GridItem>
      <GridItem marginBottom="50px">
        <Heading as='dt' fontSize='2xl' paddingBottom={2}>{"MetaScore"}</Heading>
        <CriticScore score={game.metacritic}></CriticScore>
      </GridItem>
      <GridItem marginBottom="50px">
        <Heading as='dt' fontSize='2xl' paddingBottom={2}>{"Genres"}</Heading>
        {game.genres.map((g)=><dd>{g.name}</dd>)}
      </GridItem>
      <GridItem marginBottom="50px">
        <Heading as='dt' fontSize='2xl' paddingBottom={2}>{"Publishers"}</Heading>
        {game.publishers.map((p)=><dd>{p.name}</dd>)}
      </GridItem>
    </SimpleGrid>
  );
};

export default GameAttibutes;
