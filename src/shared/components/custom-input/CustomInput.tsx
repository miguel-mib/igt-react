import { ChangeEventHandler } from "react";
import styles from "./CustomInput.module.sass";

type InputType = "text" | "password" | "number" | "email" | "date";

interface ICustomInput {
  label: string;
  type: InputType;
  hasError: boolean;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const CustomInput: React.FC<ICustomInput> = ({
  label,
  type,
  value,
  hasError,
  onChange,
}) => {
  const ID = `${label}-${(Math.random() * 10_000 + 10_000).toFixed()}`;
  return (
    <div className={styles.control}>
      <input
        type={type}
        id={ID}
        className={`${styles.input} ${hasError && styles.erro}`}
        placeholder=""
        onChange={onChange}
        value={value}
      />
      <label htmlFor={ID} className={styles.label}>
        {label}
      </label>
    </div>
  );
};
