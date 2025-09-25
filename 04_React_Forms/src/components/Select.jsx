import { useState } from "react";

export default function Select({
  label,
  name,
  value,
  options,
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
      <select value={value} onChange={handleChange} name={name}>
        <option value="">-- Odaberite --</option>
        {options &&
          options.map((opt, index) => (
            <option key={index} value={opt.value}>
              {opt.label}
            </option>
          ))}
      </select>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
