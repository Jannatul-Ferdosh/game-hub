import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/getCroppedImage";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const setGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <div>
      <Heading fontSize="2xl" marginBottom="5px">
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem paddingY="5px">
            <HStack>
              <Image
                boxSize="30px"
                borderRadius={5}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button variant="link" onClick={() => setGenreId(genre.id)}>
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default GenreList;
