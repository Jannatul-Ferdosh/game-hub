import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}
const GameScreenshot = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId);

  if (error) throw error;

  if (isLoading) return null;

  if (!data) return null;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }}>
      {data.results.map((i) => (
        <Image padding = "2px" src={i.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshot;
