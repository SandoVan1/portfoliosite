import './App.css';
import Home from './pages/home';
import AboutMe from './pages/aboutme';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import NavBar from './navbar';
import StartSection from './startscreen';

function App() {
  function docTitle(){
    document.title = 'SandoVan1'
  }
  return (
    <div className="App">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@200..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DotGothic16&family=Nixie+One&family=Oswald:wght@200..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rajdhani:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
      </head>

      <header className="App-header">
      </header>

      <main>
        <NavBar/>
        <StartSection/>
      </main>
    </div>
  );
}

export default App;
