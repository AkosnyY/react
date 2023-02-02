// import logo from 'logo.svg';
import { useState } from 'react';
import './App.css';
import ContactPage from './Pages/ContactPage';
import HomePage from './Pages/HomePage';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = (event) => {
    setCount(count + 1);
    console.log(`Vous avez cliqué ${count} fois !`)
  }

  const [contactPage, setContactPage] = useState(false);

  return (
    <div className="App">
      {contactPage ?
        <ContactPage />
        :
        <HomePage />
      }
      <button onClick={() => setContactPage(!contactPage)}>Aller vers la page {contactPage ? "d'accueil" : "de contact"}.</button>
      <p>Chiffre aléatoire {Math.random()}</p>
      <button onClick={(event) => handleClick(event)}>Click me</button>
    </div>
  );
}

export default App;
