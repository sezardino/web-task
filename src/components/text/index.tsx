import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"p"> & {
  color?: "white" | "black";
  size?: string;
};

const Text = ({
  className,
  color = "black",
  size = "16px",
  style,
  children,
}: Props) => {
  const textStyle = {
    color,
    fontSize: size,
    ...style,
  };

  return (
    <p className={className} style={textStyle}>
      {children}
    </p>
  );
};

export default Text;
