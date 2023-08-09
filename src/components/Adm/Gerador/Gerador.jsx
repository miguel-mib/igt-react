import Button from "../../UI/Button/Button";
import voucherGenerator from "voucher-code-generator";
import classes from "./Gerador.module.sass";

const AdmGerador = () => {
  const buttonClickHandle = () => {
    let voucherArray;

    try {
      voucherArray = voucherGenerator.generate({
        count: 601,
        length: 8,
        charset: voucherGenerator.charset("alphanumeric"),
      });
    } catch (error) {
      console.log(error);
    }

    const blob = new Blob([voucherArray], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "vouchers.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className={classes["wrapper"]}>
      <div className={classes["button__wrapper"]}>
        <Button onClick={buttonClickHandle}>Gerar vouchers</Button>
      </div>
    </div>
  );
};

export default AdmGerador;
