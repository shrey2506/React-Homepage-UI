import './App.css'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Home from './pages';
import ContactForm from './pages/ContactForm';
import TermsOfUse from './pages/TermsOfUse';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"><Home /> </Route>
        <Route path="/contact"><ContactForm /></Route>
        <Route path="/terms-of-use"><TermsOfUse /></Route>
        <Route patj="/privacy-policy"><PrivacyPolicy /></Route>
      </Switch>
       
    </Router>
    
  );
}

export default App;
