import { useState } from "react";

export default function TextInput({
  label,
  name,
  value,
  type,
  onChange,
  required,
}) {
  const [error, setError] = useState("");

  function handleChange(e) {
    let newValue = e.target.value;

    if (required && newValue.trim() == "") {
      setError(`${label} je obavezno polje`);
    } else {
      setError("");
    }

    onChange(name, newValue);
  }

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <br />
      <input type={type} name={name} value={value} onChange={handleChange} />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
