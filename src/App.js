import logo from './logo.svg';
import './App.css';
import { Router } from '@reach/router';
import Welcome from "./components/Welcome";
import Number from "./components/Number";


function App() {
  return (
    <div className="App">
      <Router>
        <Welcome path="/home"></Welcome>
        <Number path="/:num/:bgColor/:txtColor"></Number>
      </Router>
    </div>
  );
}

export default App;
