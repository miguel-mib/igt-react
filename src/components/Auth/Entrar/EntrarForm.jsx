import { useState } from "react";
import classes from "./EntrarForm.module.sass";
import Button from "../../UI/Button/Button";

const EntrarForm = (props) => {
  const [voucherValue, setVoucherValue] = useState("");

  const formSubmitHandle = (event) => {
    event.preventDefault();
    props.onFormSubmit(voucherValue);
  };

  const voucherChangeHandle = (event) => {
    const value = event.target.value;
    setVoucherValue(value);
  };

  return (
    <form onSubmit={formSubmitHandle}>
      <div className={classes["controls"]}>
        <div className={classes["control"]}>
          <input
            type="text"
            id="voucher"
            placeholder="VOUCHER"
            onChange={voucherChangeHandle}
          />
        </div>
        <Button type="submit">ENTRAR</Button>
      </div>
    </form>
  );
};

export default EntrarForm;
