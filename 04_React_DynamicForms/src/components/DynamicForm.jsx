import { useState } from "react";
import './DynamicForm.css'
/* DynamicForm
    props: 
    fields - konfiguracijski niz objekata (definira polja obrasca) 
    onSubmit - callback sa valjanim podacima forme 
*/

function DynamicForm({ fields, onSubmit }) {
  // 1. Pripremamo početne vrijednosti i error objekte na temelju fields parametra
  const initialState = {};
  const initialErrors = {};

  // Definicija defaultnih vrijednosti
  fields.forEach((field) => {
    initialState[field.name] =
      field.defaultValue ?? (field.type == "checkbox" ? false : "");
    initialErrors[field.name] = "";
  });

  // 2. State za vrijednosti i greške
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState(initialErrors);

  // 3. Validacija jednog polja na temelju konfiguracije
  function validateField(field, rawValue) {
    const value = typeof rawValue === "string" ? rawValue.trim() : rawValue;

    // a) Required
    if (
      field.required?.enabled &&
      (value === false || value === null || value === undefined || value === "")
    ) {
      return field.required.message || `${field.label} je obavezno polje.`;
    }

    // b) Pattern (regex)
    if (field.pattern?.enabled && value) {
      const regex = new RegExp(field.pattern.regex);
      if (!regex.test(value)) {
        return (
          field.pattern.message || `${field.label} nije u ispravnom formatu`
        );
      }
    }

    // c) Email
    if (field.email?.enabled && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(String(value))) {
        return field.email.message || "Unesite ispravnu email adresu";
      }
    }

    // d) Min length
    if (field.minLength?.enabled && typeof value === "string") {
      if (value.length < field.minLength.value) {
        return (
          field.minLength.message ||
          `${field.label} mora imati minimalno ${field.minLength.value} znakova`
        );
      }
    }

    // e) Max length
    if (field.maxLength?.enabled && typeof value === "string") {
      if (value.length > field.maxLength.value) {
        return (
          field.maxLength.message ||
          `${field.label} mora imati maksimalno ${field.maxLength.value} znakova`
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

  // 4. OnChange - ažuriramo value i odmah validiramo
  function handleChange(e, field) {
    const nextValue =
      field.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData((prev) => ({ ...prev, [field.name]: nextValue }));

    const msg = validateField(field, nextValue);
    setErrors((prev) => ({ ...prev, [field.name]: msg }));
  }

  // 5. OnBlur - validiramo kada korisnik napusti polje
  function handleBlur(field) {
    const msg = validateField(field, formData[field.name]);
    setErrors((prev) => ({ ...prev, [field.name]: msg }));
  }

  // 6. Submit - validiramo sva polja, ako je sve ok, pozivamo onSubmit
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

  // 7. Render - svako polje renderiramo prema field.type
  return (
    <form onSubmit={handleSubmit} noValidate>
      {fields.map((field) => {
        const id = `field_${field.name}`;
        const hasErrors = Boolean(errors[field.name]);

        return (
          <div key={field.name} className="form-row">
            <label htmlFor={id} title={field.hint ? field.hint : ""}>
              {field.label}{" "}
              {field.required && <span className="required">*</span>}
            </label>

            {(field.type === "text" || field.type === "email" || field.type === "number" || field.type === "password") && (
                <input
                  type={field.type}
                  id={id}
                  name={field.name}
                  value={formData[field.name]}
                  className={hasErrors ? "input-validation-error" : ""}
                  onChange={(e) => handleChange(e, field)}
                  onBlur={() => handleBlur(field)}
                  placeholder={field.placeholder || ""}
                  title={field.hint || ""}
                  aria-invalid={hasErrors}
                  aria-describedby={hasErrors ? `${id}_error` : undefined}
                />
              )}

            {field.type === "textarea" && (
              <textarea
                id={id}
                name={field.name}
                value={formData[field.name]}
                className={hasErrors ? "input-validation-error" : ""}
                onChange={(e) => handleChange(e, field)}
                onBlur={() => handleBlur(field)}
                placeholder={field.placeholder || ""}
                title={field.hint || ""}
                rows={field.rows || 4}
                cols={field.cols || 100}
                aria-invalid={hasErrors}
                aria-describedby={hasErrors ? `${id}_error` : undefined}
              />
            )}

            {field.type === "select" && (
              <select
                id={id}
                name={field.name}
                value={formData[field.name]}
                className={hasErrors ? "input-validation-error" : ""}
                onChange={(e) => handleChange(e, field)}
                onBlur={() => handleBlur(field)}
                title={field.hint || ""}
                aria-invalid={hasErrors}
                aria-describedby={hasErrors ? `${id}_error` : undefined}
              >
                {field.placeholder && (
                  <option value="">{field.placeholder}</option>
                )}
                {field.options?.map((option) => (
                  <option key={String(option.value)} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            )}

            {field.type === "checkbox" && (
              <div className="checkbox-group">
                <label htmlFor={id}>
                  <input
                    type={field.type}
                    id={id}
                    name={field.name}
                    checked={Boolean(formData[field.name])}
                    className={hasErrors ? "input-validation-error" : ""}
                    onChange={(e) => handleChange(e, field)}
                    onBlur={() => handleBlur(field)}
                    placeholder={field.placeholder || ""}
                    title={field.hint || ""}
                    aria-invalid={hasErrors}
                    aria-describedby={hasErrors ? `${id}_error` : undefined}
                  />
                  {field.checkboxLabel || field.label}
                </label>
              </div>
            )}

            {field.type === "radio" && (
              <div className="radio-group">
                {field.options?.map((option) => {
                  const rid = `${id}_${option.value}`;

                  return (
                    <label htmlFor={rid}>
                      <input
                        type={field.type}
                        id={rid}
                        name={field.name}
                        checked={formData[field.name] === option.value}
                        value={option.value}
                        className={hasErrors ? "input-validation-error" : ""}
                        onChange={(e) => handleChange(e, field)}
                        onBlur={() => handleBlur(field)}
                        placeholder={field.placeholder || ""}
                        title={field.hint || ""}
                        aria-invalid={hasErrors}
                        aria-describedby={hasErrors ? `${id}_error` : undefined}
                      />
                      {option.label}
                    </label>
                  );
                })}
              </div>
            )}

            {hasErrors && (
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
