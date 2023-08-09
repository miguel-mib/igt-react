import { useState } from "react";

const DynamicPhoneInput = () => {
  const [phoneNumbers, setPhoneNumbers] = useState([""]);

  const handleAddPhoneNumber = () => {
    setPhoneNumbers([...phoneNumbers, ""]);
  };

  const handlePhoneNumberChange = (index, value) => {
    const newPhoneNumbers = [...phoneNumbers];
    newPhoneNumbers[index] = value;
    setPhoneNumbers(newPhoneNumbers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Números de telefone:", phoneNumbers);
    // Aqui você pode enviar os números de telefone para onde precisar
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {phoneNumbers.map((phoneNumber, index) => (
          <div key={index}>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => handlePhoneNumberChange(index, e.target.value)}
              placeholder="Número de telefone"
            />
          </div>
        ))}
        <button type="button" onClick={handleAddPhoneNumber}>
          Adicionar Número
        </button>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
const Testes = () => {
  return <DynamicPhoneInput />;
};

export default Testes;
