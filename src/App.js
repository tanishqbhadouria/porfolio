
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from './components/navBar';
import { Banner } from './components/Banner';
import { Skills } from "./components/skills";
// import { Projects } from "./components/Projects";
// import { Contact } from "./components/Contact";
// import { Footer } from "./components/Footer";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
    </div>
  );
}

export default App;
