import React from "react" ;
import {BrowserRouter,Route,Switch} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import NasaPhoto from "./components/NasaPhoto";
import NasaApi from "./components/NasaApi";
import "./App.css";

function App() {

  return (
    <BrowserRouter>
    <NavBar />
      <div className="app"> 
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={NasaPhoto} path="/nasaphoto" exact />
          <Route component={NasaApi} path="/nasaapi" exact />
          <Route component={About} path="/about" exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
