import { useState } from "react";
import TextInput from "./TextInput";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(name, value) {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function validate() {
    const newErrors = {};

    if (!formData.email.includes("@")) {
      newErrors.email = "Email mora biti pravilno formatirana email adresa";
    }

    if (formData.password.trim() == "") {
      newErrors.password = "Lozinka ne smije biti prazna";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validate()) return;

    console.log("Login data: ", formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Logirajte se</h2>
      <TextInput
        label="Email"
        name="email"
        type={"email"}
        value={formData.email}
        required={true}
        onChange={handleChange}
      />
      {errors.email && <p style={{color: "red"}}>{errors.email}</p>}
      <TextInput
        label="Lozinka"
        name="password"
        type={"password"}
        value={formData.password}
        required={true}
        onChange={handleChange}
      />
      {errors.password && <p style={{color: "red"}}>{errors.password}</p>}
      <button type="submit">Logiraj se</button>
    </form>
  );
}
