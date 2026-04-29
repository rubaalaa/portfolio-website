import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Components/Banner'
import Skill from './Components/Skill'
import Projects from './Components/Projects';
import 'animate.css';
import { Contact } from './Components/Contact';
import { Newsletter } from './Components/Newsletter';
import { Footer } from './Components/Footer'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner></Banner>
      <Skill></Skill>
      <Projects></Projects>
      <Contact></Contact>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
}

export default App;
