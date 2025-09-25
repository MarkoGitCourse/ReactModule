import { useState } from "react";

export default function RadioButtonList({
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
      {options.map((opt, index) => (
        <label key={index}>
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={value === opt.value}
            onChange={handleChange}
          />
          {opt.label}
        </label>
      ))}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
