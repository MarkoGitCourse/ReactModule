import React, { useState } from "react";
import styles from "./App.module.css";
import StudentCard from "./components/StudentCard";

function App() {
  // 1. Početni podaci
  const [students, setStudents] = useState([
    { id: 1, name: "Ana", age: 20, grade: 5, active: true },
    { id: 2, name: "Marko", age: 22, grade: 3, active: false },
    { id: 3, name: "Petra", age: 21, grade: 1, active: true },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    age: 0,
    grade: 1,
    active: false,
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kreairamo novog studenta
    const newStudent = {
      id: students.length + 1,
      ...formData,
      age: Number(formData.age),
      grade: Number(formData.grade),
    };

    // Dodajemo studenta u listu
    setStudents((prev) => [...prev, newStudent]);

    // Resetiramo formu
    setFormData({
      name: "",
      age: 0,
      grade: 1,
      active: false,
    });
  };

  function handleDelete(id) {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  }

  return (
    <div className={styles.container}>
      {students.length > 0 ? (
        <div className={styles.studentList}>
          {students.map((student) => (
            <StudentCard
              key={student.id}
              name={student.name}
              age={student.age}
              grade={student.grade}
              active={student.active}
              onDelete={() => handleDelete(student.id)}
            >
              {student.grade === 5 && <p>Najbolji student!</p>}
              {!student.active ? <p>Neaktivan</p> : <p>Aktivan</p>}
            </StudentCard>
          ))}
        </div>
      ) : null}
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Dodaj novog studenta</h2>
        <div>
          <label>Ime:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Godine:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Ocjena</label>
          <select
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            required
          >
            <option value=""> -- Odaberite ocjenu --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="active"
              checked={formData.active}
              onChange={handleChange}
            />
            Aktivan student
          </label>
        </div>
        <button type="submit">Dodaj studenta</button>
      </form>
    </div>
  );
}

export default App;
