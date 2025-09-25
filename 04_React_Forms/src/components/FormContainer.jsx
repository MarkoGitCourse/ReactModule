import { useState } from "react";
import TextInput from "./TextInput";
import TextArea from "./TextArea";
import Select from "./Select";
import Checkbox from "./Checkbox";
import RadioButtonList from "./RadioButtonList";

export default function FormContainer() {
  const [formData, setFormData] = useState({
    ime: "",
    poruka: "",
    grad: "",
    prihvaceno: false,
    spol: "",
    email: "",
  });

  const validators = {
    ime: true,
    poruka: true,
    grad: true,
    prihvaceno: true,
    spol: true,
    email: true,
  };

  const gradovi = [
    {
      label: "Zagreb",
      value: "ZG",
    },
    {
      label: "Split",
      value: "ST",
    },
    {
      label: "Rijeka",
      value: "RI",
    },
  ];

  const spolovi = [
    { label: "Žensko", value: "Ž" },
    { label: "Muško", value: "M" },
  ];

  function handleChange(name, value) {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    for (const [key, value] of Object.entries(validators)) {
      console.log(key, value);
      if (value) {
        if (formData[key] === "") {
          alert("Došlo je do greške, provjerite polja!");
          return;
        }
      }
    }

    console.log("Podaci iz forme: ", formData);
    alert("Forma poslana!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Moja Forma</h2>
      {/* Ovdje dodavati form komponente */}
      <TextInput
        label="Ime"
        name="ime"
        type="text"
        value={formData.ime}
        onChange={handleChange}
        required={validators.ime}
      />

      <TextInput
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required={validators.email}
      />

      <TextArea
        label="Poruka"
        name="poruka"
        value={formData.poruka}
        onChange={handleChange}
        required={validators.poruka}
      />

      <Select
        label="Grad"
        name="grad"
        value={formData.grad}
        onChange={handleChange}
        options={gradovi}
        required={validators.grad}
      />

      <RadioButtonList
        label="Spol"
        name="spol"
        value={formData.spol}
        onChange={handleChange}
        options={spolovi}
        required={validators.spol}
      />

      <Checkbox
        label="Prihvaćam uvjete"
        name="prihvaceno"
        checked={formData.prihvaceno}
        onChange={handleChange}
        required={validators.prihvaceno}
      />

      <button type="submit">Pošalji</button>
    </form>
  );
}
