import { useState } from 'react'
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0);

  const features = ["Komponente", "JSX", "Stilovi", "Ponovna upotreba"];
  const userName = "Ana";
let destArray= features.map((feature, index) => (
                <li key={index}>
                  {feature}
                </li>
            ))
  const getGreeting = () => {
    const hour = new Date().getHours();

    if(hour < 12) return "Dobro jutro";
    if(hour < 16) return "Dobar dan";
    return "Dobra večer"
  }

  return (
    <div className='container'>
      <Header />
      <div className='grid'>
        <Card title="Dobrodošla poruka">
          <p>{getGreeting()}, <strong>{userName}</strong></p>
        </Card>
        <Card title="Dobrodošli">
          <p>Ovo je naša prva stranica složena od komponenti</p>
        </Card>
        <Card title="Ponovna upotreba">
          <ul>
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
          </ul>
        </Card>
        <Card title="Treća kartica">
          <p>Još jedan primjer iste komponente</p>
        </Card>
        <Card title="Što pokrivamo?">
          <ol>
            {destArray}
          </ol>
        </Card>
      </div>
      <Footer />
    </div>
  )
}

export default App
