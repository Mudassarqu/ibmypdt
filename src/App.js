
import React from "react";
import { Routes, Route } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Error from './Error';

function App() {

  return(
    <>
<Routes>
<Route exact path="/" component={About} />
<Route path="/contact" component={Contact} />
<Route component={Error}/>
</Routes>
  
  
  </>
  )
};
export default App;
