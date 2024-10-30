import Heading from "../../components/heading";
import Text from "../../components/text";
import ctaModel from "../../models/CTA.model";

import "./index.css";

import focusImg from "/focus.png";
import iconsImg from "/icons.png";

const CTA = () => {
  return (
    <div className="cta">
      <div className="container">
        <div className="content">
          <Heading level="h2" color="white">
            {ctaModel.heading}
          </Heading>
          <Text color="white">{ctaModel.text}</Text>
          <img src={iconsImg} alt="Icons" />
        </div>
        <div className="image">
          <img src={focusImg} alt="Focus" />
        </div>
      </div>
    </div>
  );
};

export default CTA;
