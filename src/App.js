import React, {useEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
// import AOS from "./aos/aos.js";
// import "./aos/dist/aos.css";
import './App.css';
// import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import Header from './components/Header';
import Featured from './components/Featured';
import Services from './components/Services';
import Cta from './components/Cta';
import Testimonials from './components/Testimonials';
import News from './components/News';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <Cta />
      <Testimonials />
      <News />
      <Footer />
    </>
  );
}

export default App;
