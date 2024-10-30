import "./index.css";

import Heading from "../heading";
import Image from "../image";
import Text from "../text";

type Props = {
  image: string;
  heading: string;
  text: string;
  link: string;
};

const ImageCard = ({ image, heading, text, link }: Props) => {
  return (
    <div className="imageCard">
      <Image
        src={image}
        alt={heading}
        width={350}
        height={196}
        className="imageCard__image"
      />
      <div className="imageCard__content">
        <Heading level="h3">{heading}</Heading>
        <Text className="imageCard__text"> {text} </Text>
        <a href={link} className="imageCard__link">
          Read More
        </a>
      </div>
    </div>
  );
};

export default ImageCard;
