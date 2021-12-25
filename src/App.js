
import React from "react";
import {Route,Switch} from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Error from './Error';

function App() {

  return(
    <>
<Switch>
<Route exact path="/" component={About} />
<Route path="/contact" component={Contact} />
<Route component={Error}/>
</Switch>
  
  
  </>

};
export default App;
