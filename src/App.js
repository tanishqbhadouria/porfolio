
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from './components/navBar';
import { Banner } from './components/Banner';
import { Skills } from "./components/skills";
import { Projects } from "./components/projects";
// import { Contact } from "./components/Contact";
import { Footer } from "./components/footer";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
