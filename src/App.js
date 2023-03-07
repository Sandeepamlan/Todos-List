import './App.css';
import React from "react"
import Header from './MyComponent/Header.js'
import Todos from "./MyComponent/Todos.js";
import Footer from "./MyComponent/Footer.js";
import Product from './MyComponent/Product';

function App() {
  return (
    <>
  <Header title={"Sandeep TODOs"} searchBar={true}/>
    {/* <i class="bi bi-patch-check">c</i> */}
   
    <Todos/>
  <Product/>    

    <Footer/>
      
    </>
    
  );
}

export default App;