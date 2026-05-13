import { Image } from "@chakra-ui/react";
import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import bullsEye from "../assets/bulls-eye.webp";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  if (rating === 3) return <Image src={meh} boxSize="50px"/>;
  if (rating === 4) return <Image src={thumbsUp} boxSize="50px"/>;
  return <Image src={bullsEye} boxSize="50px" />;
};

export default Emoji;
