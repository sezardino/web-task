import {
  ComponentPropsWithRef,
  CSSProperties,
  SyntheticEvent,
  useState,
} from "react";
import { LuLoader } from "react-icons/lu";
import { PiImageBroken } from "react-icons/pi";
import { cn } from "../../utils/cn";

import "./index.css";

type Props = ComponentPropsWithRef<"img"> & {
  width: number;
  height: number;
};

const calculateFallbackIconSize = (width: number, height: number): number => {
  const minDimension = Math.min(width || 100, height || 100);

  return Math.min(minDimension * 0.2, 80);
};

const Image = ({ src, alt, className, width, height }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const onLoad = () => {
    setIsLoading(false);
  };

  const onError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    setIsLoading(false);
    setHasError(true);
    (e.target as HTMLImageElement).alt = "Image failed to load";
  };

  const wrapperStyles: CSSProperties = {
    width: `${width}px`,
    height: `${height}px`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    color: "#999",
  };

  return (
    <>
      {isLoading && (
        <div className={cn("image", className)} style={wrapperStyles}>
          <LuLoader
            size={calculateFallbackIconSize(width, height)}
            className="loader"
          />
        </div>
      )}
      {hasError ? (
        <div className={cn("image", className)} style={wrapperStyles}>
          <PiImageBroken size={calculateFallbackIconSize(width, height)} />
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={cn("image", className)}
          width={width}
          height={height}
          onError={onError}
          onLoad={onLoad}
        />
      )}
    </>
  );
};

export default Image;
