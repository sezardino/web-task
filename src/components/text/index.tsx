import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"p"> & {
  color?: "white" | "black";
  size?: string;
  tag?: "p" | "span";
};

const Text = ({
  className,
  color = "black",
  size = "16px",
  tag: Tag = "p",
  style,
  children,
}: Props) => {
  const textStyle = {
    color,
    fontSize: size,
    ...style,
  };

  return (
    <Tag className={className} style={textStyle}>
      {children}
    </Tag>
  );
};

export default Text;
