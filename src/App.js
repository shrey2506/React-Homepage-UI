import './App.css'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Home from './pages';
import ContactForm from './pages/ContactForm';
import TermsOfUse from './pages/TermsOfUse';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CareerPage from './pages/Careers';
import IndustrialAutomation from './pages/IndustryPages/IndustrialAutomation';
import ChemicalAndManufacturing from './pages/IndustryPages/ChemicalAndManufacturing';
import Pharmaceuticals from './pages/IndustryPages/Pharmaceuticals';
import Automotive from './pages/IndustryPages/Automotive';
import Agriculture from './pages/IndustryPages/Agriculture';
import FoodTech from './pages/IndustryPages/FoodTech';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"><Home /> </Route>
        <Route path="/contact"><ContactForm /></Route>
        <Route path="/terms-of-use"><TermsOfUse /></Route>
        <Route path="/privacy-policy"><PrivacyPolicy /></Route>
        <Route path="/careers"><CareerPage /></Route>
        <Route path="/industry/industrial-automation"><IndustrialAutomation /></Route>
        <Route path="/industry/chemical-and-manufacturing"><ChemicalAndManufacturing /></Route>
        <Route path="/industry/pharmaceuticals"><Pharmaceuticals /></Route>
        <Route path="/industry/automotive"><Automotive /></Route>
        <Route path="/industry/agriculture"><Agriculture /></Route>
        <Route path="/industry/food-tech"><FoodTech /></Route>
      </Switch>
       
    </Router>
    
  );
}

export default App;
