import React, { useState } from "react";

function DynamicForm({ fields, onSubmit }) {
  // 1) Pripremimo početne vrijednosti i error objekte na temelju fields
  const initialState = {};
  const initialErrors = {};

  fields.forEach((field) => {
    initialState[field.name] =
      field.defaultValue ?? (field.type === "checkbox" ? false : "");
    initialErrors[field.name] = "";
  });

  // 2) State za vrijednosti i greške
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState(initialErrors);

  // 3) Validacija jednog polja na temelju konfiguracije
  function validateField(field, rawValue) {
    const value = typeof rawValue === "string" ? rawValue.trim() : rawValue;
    // a) Required
    if (
      field.required &&
      (value === "" || value === false || value === null || value === undefined)
    ) {
      return `${field.label} je obavezno polje.`;
    }

    // b) Pattern (regex)
    if (field.pattern && value) {
      const regex = new RegExp(field.pattern);
      if (!regex.test(value)) {
        return (
          field.patternMessage || `${field.label} nije u ispravnom formatu.`
        );
      }
    }

    // c) Email
    if (field.email?.enabled && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(String(value))) {
        return field.email.message || `Unesite ispravnu email adresu.`;
      }
    }

    // d) Min length
    if (field.minLength?.enabled && typeof value === "string") {
      if (value.length < field.minLength.value) {
        return (
          field.minLength.message ||
          `${field.label} mora imati barem ${field.minLength.value} znakova.`
        );
      }
    }

    // e) Max length
    if (field.maxLength?.enabled && typeof value === "string") {
      if (value.length > field.maxLength.value) {
        return (
          field.maxLength.message ||
          `${field.label} može imati najviše ${field.maxLength.value} znakova.`
        );
      }
    }

    // f) Range (brojevi)
    if (
      field.range?.enabled &&
      value !== "" &&
      value !== null &&
      value !== undefined
    ) {
      const num = Number(value);
      if (!Number.isNaN(num)) {
        if (num < field.range.min || num > field.range.max) {
          return (
            field.range.message ||
            `${field.label} mora biti između ${field.range.min} i ${field.range.max}.`
          );
        }
      }
    }

    // g) Custom validator (funkcija)
    if (typeof field.validator === "function") {
      const customError = field.validator(value, formData);
      if (customError) return customError;
    }

    return "";
  }

  // 4) OnChange — ažuriramo value i odmah validiramo
  function handleChange(e, field) {
    const nextValue =
      field.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData((prev) => ({ ...prev, [field.name]: nextValue }));

    const msg = validateField(field, nextValue);
    setErrors((prev) => ({ ...prev, [field.name]: msg }));
  }

  // 5) OnBlur — validiramo kada korisnik napusti polje
  function handleBlur(field) {
    const msg = validateField(field, formData[field.name]);
    setErrors((prev) => ({ ...prev, [field.name]: msg }));
  }

  // 6) Submit — validiramo sva polja, ako je sve ok, zovemo onSubmit
  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = {};
    let ok = true;

    fields.forEach((field) => {
      const msg = validateField(field, formData[field.name]);
      newErrors[field.name] = msg;
      if (msg) ok = false;
    });

    setErrors(newErrors);
    if (ok && typeof onSubmit === "function") {
      onSubmit(formData);
    }
  }

  // 7) Render — svako polje prema field.type
  return (
    <form onSubmit={handleSubmit} noValidate>
      {fields.map((field) => {
        const id = `field_${field.name}`;
        const hasError = Boolean(errors[field.name]);

        return (
          <div key={field.name} className="form-row">
            <label htmlFor={id} title={field.hint ? field.hint : ""}>
              {field.label}{" "}
              {field.required && <span className="required">*</span>}
            </label>

            {field.type === "text" && (
              <input
                id={id}
                type="text"
                name={field.name}
                value={formData[field.name]}
                className={hasError ? "input-validation-error" : ""}
                onChange={(e) => handleChange(e, field)}
                onBlur={() => handleBlur(field)}
                placeholder={field.placeholder || ""}
                aria-invalid={hasError}
                aria-describedby={hasError ? `${id}_error` : undefined}
                title={field.hint ? field.hint : ""}
              />
            )}

            {field.type === "number" && (
              <input
                id={id}
                type="number"
                name={field.name}
                value={formData[field.name]}
                className={hasError ? "input-validation-error" : ""}
                onChange={(e) => handleChange(e, field)}
                onBlur={() => handleBlur(field)}
                placeholder={field.placeholder || ""}
                aria-invalid={hasError}
                aria-describedby={hasError ? `${id}_error` : undefined}
                title={field.hint ? field.hint : ""}
              />
            )}

            {field.type === "textarea" && (
              <textarea
                id={id}
                name={field.name}
                value={formData[field.name]}
                className={hasError ? "input-validation-error" : ""}
                onChange={(e) => handleChange(e, field)}
                onBlur={() => handleBlur(field)}
                placeholder={field.placeholder || ""}
                aria-invalid={hasError}
                aria-describedby={hasError ? `${id}_error` : undefined}
                rows={field.rows || 4}
                title={field.hint ? field.hint : ""}
              />
            )}

            {field.type === "select" && (
              <select
                id={id}
                name={field.name}
                value={formData[field.name]}
                className={hasError ? "input-validation-error" : ""}
                onChange={(e) => handleChange(e, field)}
                onBlur={() => handleBlur(field)}
                aria-invalid={hasError}
                aria-describedby={hasError ? `${id}_error` : undefined}
                title={field.hint ? field.hint : ""}
              >
                <option value="">
                  {field.placeholder || "-- odaberite --"}
                </option>
                {field.options?.map((opt) => (
                  <option key={String(opt)} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            )}

            {field.type === "checkbox" && (
              <div className="checkbox-group">
                <label htmlFor={id}>
                  <input
                    id={id}
                    type="checkbox"
                    name={field.name}
                    checked={Boolean(formData[field.name])}
                    className={hasError ? "input-validation-error" : ""}
                    onChange={(e) => handleChange(e, field)}
                    onBlur={() => handleBlur(field)}
                    aria-invalid={hasError}
                    aria-describedby={hasError ? `${id}_error` : undefined}
                    title={field.hint ? field.hint : ""}
                  />
                  {field.checkboxLabel || field.label}
                </label>
              </div>
            )}

            {field.type === "radio" && (
              <div
                className="radio-group"
                role="radiogroup"
                aria-labelledby={id}
              >
                {field.options?.map((opt) => {
                  const rid = `${id}_${String(opt)}`;
                  return (
                    <label key={String(opt)} htmlFor={rid}>
                      <input
                        id={rid}
                        type="radio"
                        name={field.name}
                        value={opt}
                        className={hasError ? "input-validation-error" : ""}
                        checked={formData[field.name] === opt}
                        onChange={(e) => handleChange(e, field)}
                        onBlur={() => handleBlur(field)}
                        aria-invalid={hasError}
                        aria-describedby={hasError ? `${id}_error` : undefined}
                        title={field.hint ? field.hint : ""}
                      />
                      {opt}
                    </label>
                  );
                })}
              </div>
            )}

            {hasError && (
              <p id={`${id}_error`} className="error">
                {errors[field.name]}
              </p>
            )}
          </div>
        );
      })}

      <button type="submit">Pošalji</button>
    </form>
  );
}

export default DynamicForm;
