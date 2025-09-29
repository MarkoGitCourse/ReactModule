import "./App.css";
import DynamicForm from "./components/DynamicForm";

function App() {
  const fields = [
    {
      name: "ime",
      label: "Ime i Prezime",
      type: "text",
      required: {
        enabled: true,
        message: "Obavezno polje"
      },
      placeholder: "Unesite ime i prezime",
      hint: "Minimalno 3, maksimalno 20 znakova.",
      minLength: {
        enabled: true,
        value: 3,
        message: "Ime mora imati barem 3 znaka.",
      },
      maxLength: {
        enabled: true,
        value: 20,
        message: "Ime može imati najviše 20 znakova.",
      },
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      required: {
        enabled: true,
        message: "Obavezno polje"
      },
      placeholder: "primjer@domena.com",
      email: {
        enabled: true,
        message: "Molimo unesite ispravnu email adresu.",
      },
    },
    {
      name: "godine",
      label: "Godine",
      type: "number",
      required: {
        enabled: true,
        message: "Obavezno polje"
      },
      placeholder: "npr. 25",
      range: {
        enabled: true,
        min: 18,
        max: 65,
        message: "Godine moraju biti između 18 i 65.",
      },
    },
    {
      name: "opis",
      label: "Kratki opis",
      type: "textarea",
      placeholder: "Recite nam nešto o sebi...",
      rows: 4,
      maxLength: {
        enabled: true,
        value: 120,
        message: "Opis može imati najviše 120 znakova.",
      },
    },
    {
      name: "grad",
      label: "Grad",
      type: "select",
      required: {
        enabled: true,
        message: "Obavezno polje"
      },
      options: [
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
      ],
      placeholder: "-- odaberite grad --",
    },
    {
      name: "spol",
      label: "Spol",
      type: "radio",
      required: {
        enabled: true,
        message: "Obavezno polje"
      },
      options: [
        {
          label: "Muško",
          value: "M",
        },
        {
          label: "Žensko",
          value: "Ž",
        },
      ],
    },
    {
      name: "newsletter",
      label: "Newsletter",
      type: "checkbox",
      checkboxLabel: "Želim primati newsletter",
      required: {
        enabled: true,
        message: "Obavezno polje"
      },
    },
    {
      name: "korisnickoIme",
      label: "Korisničko ime",
      type: "text",
      required: true,
      pattern: {
        enabled: true,
        regex: "^[a-zA-Z0-9_.-]{4,16}$",
        message: "Dozvoljena su slova, brojevi i _.- (4–16 znakova)."
      },
      // Primjer custom validatora: zabranimo 'admin'
      validator: (value) => {
        if (String(value).toLowerCase() === "admin") {
          return "Korisničko ime 'admin' nije dopušteno.";
        }
        return "";
      },
    },
  ];

  function handleFormSubmit(data) {
    console.log("Podaci iz obrasca: ", data);
    alert("Forma poslana! Pogledaj konzolu");
  }

  return (
    <>
      <DynamicForm fields={fields} onSubmit={handleFormSubmit} />
    </>
  );
}

export default App;
