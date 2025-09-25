import { useState } from "react";
import TextInput from "./TextInput";
import TextArea from "./TextArea";
import Select from "./Select";
import Checkbox from "./Checkbox";
import RadioButtonList from "./RadioButtonList";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    ime: "",
    email: "",
    password: "",
    confirmPassword: "",
    poruka: "",
    grad: "",
    prihvaceno: false,
    spol: "",
    interesi: [""],
  });

  const [errors, setErrors] = useState({});

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

  function handleInterestChange(index, value) {
    const noviInteresi = [...formData.interesi];
    noviInteresi[index] = value;
    setFormData(prev => ({...prev, interesi: noviInteresi}));
  }

  function addInterest() {
    setFormData(prev => ({...prev, interesi: [...prev.interesi, ""]}))
  }

  function validate() {
    const newErrors = {};
    if (!formData.email.includes("@")) {
      newErrors.email = "Email mora sadržavati email adresu.";
    }

    if (formData.password.length < 6) {
      newErrors.password = "Lozinka mora imati najmanje 6 znakova.";
    }

    if (formData.password != formData.confirmPassword) {
      newErrors.confirmPassword = "Lozinke se moraju podudarati.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validate()) return;

    console.log("Registracija: ", formData);
    alert("Registracija uspješna");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Registracija</h2>
        <TextInput
          label="Ime i prezime"
          value={formData.ime}
          name="ime"
          type="text"
          onChange={handleChange}
          required={true}
        />
        <TextInput
          label="Email"
          value={formData.email}
          name="email"
          type="email"
          onChange={handleChange}
          required={true}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        <TextInput
          label="Lozinka"
          value={formData.password}
          name="password"
          type="password"
          onChange={handleChange}
          required={true}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        <TextInput
          label="Ponovi lozinku"
          value={formData.confirmPassword}
          name="confirmPassword"
          type="password"
          onChange={handleChange}
          required={true}
        />
        {errors.confirmPassword && (
          <p style={{ color: "red" }}>{errors.confirmPassword}</p>
        )}
        <TextArea
          label="O sebi"
          name="poruka"
          onChange={handleChange}
          value={formData.poruka}
        />
        <Select
          label="Grad"
          name="grad"
          value={formData.grad}
          onChange={handleChange}
          options={gradovi}
          required={true}
        />

        <RadioButtonList
          label="Spol"
          name="spol"
          value={formData.spol}
          onChange={handleChange}
          options={spolovi}
          required={true}
        />

        <Checkbox
          label="Prihvaćam uvjete"
          name="prihvaceno"
          checked={formData.prihvaceno}
          onChange={handleChange}
          required={true}
        />

        <h3>Interesi</h3>
        {formData.interesi.map((interes, index) => (
          <div key={index}>
            <input
              type="text"
              value={interes}
              onChange={(e) => handleInterestChange(index, e.target.value)}
            />
          </div>
        ))}
        <button type="button" onClick={addInterest}>
          Dodaj interes
        </button>

        <br />
        <button type="submit">Registriraj se</button>
      </form>
    </>
  );
}
