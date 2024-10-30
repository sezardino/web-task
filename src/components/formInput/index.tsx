import { ComponentPropsWithoutRef } from "react";
import { cn } from "../../utils/cn";

import "./index.css";

type Props = ComponentPropsWithoutRef<"input"> & {
  style?: "full" | "half";
};

const FormInput = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  required,
  disabled,
  className,
  ...rest
}: Props) => {
  return (
    <input
      {...rest}
      className={cn("formInput", className)}
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
    />
  );
};

export default FormInput;
