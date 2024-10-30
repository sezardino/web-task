import { ComponentPropsWithoutRef } from "react";
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
  style,
}: Props) => {
  const formStyle =
    style === "full" ? "formInput formInput-full" : "formInput formInput-half";

  return (
    <input
      className={formStyle}
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
