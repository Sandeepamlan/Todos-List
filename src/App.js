import './App.css';
import Item from "./MyComponent/Item"
import React from "react"
import Header from './MyComponent/Header.js'
import Todos from "./MyComponent/Todos.js";
import Footer from "./MyComponent/Footer.js";

function App() {
  return (
    <>
    <Header/>
    <i class="bi bi-patch-check">c</i>
    <Item/>
    
    <Todos/>
    <Footer/>
      
    </>
    
  );
}

export default App;