import Heading from "../heading/index";
import Text from "../text/index";

import "./index.css";

type Props = {
  img: string;
  heading: string;
  text: string;
};

const Feature = ({ img, heading, text }: Props) => {
  return (
    <div className="feature">
      <img src={img} alt={heading} />
      <Heading level="h3">{heading}</Heading>
      <Text>{text}</Text>
    </div>
  );
};

export default Feature;
