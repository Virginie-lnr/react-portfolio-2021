import './App.css';
import Home from './Home';
import About from './About';
import Services from './Services';
import Work from './Work';
import Certifications from './Certifications';
import Contact from './Contact';
import Navbar from './components/Navbar/Navbar'
import {Route, Link} from 'react-router-dom'

function App() {
  return (
      <div className="container">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/my-work" component={Work} />
        <Route exact path="/certifications" component={Certifications} />
        <Route exact path="/contact" component={Contact} />
      </div>
  );
}

export default App;
