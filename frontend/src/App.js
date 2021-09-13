import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Sections/Home';
import Projects from './components/Sections/Projects';
import Skills from './components/Sections/Skills';
import Contact from './components/Sections/Contact';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

