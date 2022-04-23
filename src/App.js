import './App.css';
import Club from './Components/Club';
import Experience from './Components/Experience';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Resume from './Components/Resume';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
      <Experience />
      <Club />
      <Resume />
    </div>
  );
}

export default App;
