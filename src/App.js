import React from 'react';
//import PageWrapper from './components/PageWrapper'
import Header from "./components/Header";
import Banner from "./components/Banner";
import Main from "./components/Main";
import Cta from "./components/Cta";
import Footer from "./components/Footer";


import './App.css';

function App() {
  return (
    <div className="App">
    <Header />
    <Banner />
    <Main />
    <Cta />
    <Footer /> 
      {/*<PageWrapper />*/}
    </div>
  );
}

export default App;
