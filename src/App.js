
import './App.css';
import About from './page/About'
import Contact from './page/Contact'
import Home from './page/Home'
import Login from './page/Login'
import {Switch,Route,Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/home">Home</Link>
        <Link to="/login">Login</Link> 
      </nav>
      <p>FRONTEND WEB DEVELOPMENT</p>
      <Switch>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
