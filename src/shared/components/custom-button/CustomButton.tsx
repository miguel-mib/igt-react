import { MouseEventHandler } from "react";
import styles from "./CustomButton.module.sass";

interface ICustomButton {
  children: React.ReactNode;
  type: "submit" | "button" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement> | null;
}

export const CustomButton: React.FC<ICustomButton> = ({
  children,
  type,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={styles.button}
      onClick={onClick ?? undefined}
    >
      {children}
    </button>
  );
};
