import { HTMLProps } from "react";

type Props = HTMLProps<HTMLHeadingElement> & {
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  color?: "black" | "white";
};

const Heading = ({
  className,
  level: HeadingTag = "h1",
  color = "black",
  children,
  ...rest
}: Props) => {
  const headingStyle = {
    color: color,
  };

  return (
    <HeadingTag {...rest} className={className} style={headingStyle}>
      {children}
    </HeadingTag>
  );
};

export default Heading;
