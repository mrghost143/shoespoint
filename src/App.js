import "./App.css";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductPage from "./pages/ProductPage";
import {BrowserRouter as Router ,Route ,Switch } from "react-router-dom"
import CheckoutPage from "./pages/CheckoutPage";
  

function App() {

  return(
  <Router>
     <div className="app">
  
    
    <Switch >
      <Route exact path="/" >
    <Home/>
    </Route>
    
    {/* <ProductList/> */}
    <Route path="/product" >
     < ProductPage/>
    </Route>
    {/* checkout page */}
      <Route path="/checkout" >
     < CheckoutPage/>
    </Route>
    </Switch>
    </div>
    </Router>
  
  );
}

export default App;
