import { ComponentPropsWithRef, SyntheticEvent } from "react";

type Props = ComponentPropsWithRef<"img"> & {};

const Image = ({
  src,
  alt,
  className,
  width = "auto",
  height = "auto",
}: Props) => {
  const handleImageError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    (e.target as HTMLImageElement).alt = "Image failed to load";
  };

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      onError={handleImageError}
    />
  );
};

export default Image;
