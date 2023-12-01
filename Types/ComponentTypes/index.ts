import { ChangeEvent, CSSProperties } from "react";

export interface TextFieldProps {
  label: string;
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>, name: string) => void;
  value: string | undefined;
  id: string;
  placeholder: string;
  className: string;
  name: string;
}

export interface InputFieldProp {
  label?: string;
  type?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string | undefined;
  id?: string;
  placeholder?: string;
  className?: string;
  name?: string;
}
export interface ButtonProps {
  text?: string;
  type: "submit" | "button" | "reset";
  className?: string;
  style?: CSSProperties;
}

export interface ErrorTagProp {
  text: string;
}
