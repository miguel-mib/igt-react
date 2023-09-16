import { MouseEventHandler } from "react";
import styles from "./CustomButton.module.sass";

interface ICustomButton {
  children: React.ReactNode;
  type: "submit" | "button" | "reset";
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | null;
}

export const CustomButton: React.FC<ICustomButton> = ({
  children,
  type,
  className,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${className}`}
      onClick={onClick ?? undefined}
    >
      {children}
    </button>
  );
};
