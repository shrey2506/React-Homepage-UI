import './App.css'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Home from './pages';
import ContactForm from './pages/ContactForm';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"><Home /> </Route>
        <Route path="/contact"><ContactForm /></Route>
      </Switch>
       
    </Router>
    
  );
}

export default App;
