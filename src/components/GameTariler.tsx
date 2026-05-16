import useTrailer from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTariler = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailer(gameId);

  if (error) throw error;

  if (isLoading) return null;

  const first = data?.results[0];

  return first ? (
    <video src={first.data[480]} poster={first.preview} controls></video>
  ) : null;
};

export default GameTariler;
