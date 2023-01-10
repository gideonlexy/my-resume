import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import dataProfile from "./resumeData";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header data={dataProfile} />
        <About data={dataProfile} />
        <Resume data={dataProfile} />
        <Portfolio data={dataProfile} />
        <Contact data={dataProfile} />
        <Footer data={dataProfile} />
      </div>
    );
  }
}

export default App;
