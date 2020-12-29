import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from "./components/Hero";
import Searchbar from "./components/Searchbar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Searchbar />
    </div>
  );
}


export default App;
