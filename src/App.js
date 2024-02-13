import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import ShipManage from './components/ShipManage';
import ValentinesDay from './components/ValentinesDay';
import PreFooter from './components/PreFooter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ShipManage />
      <ValentinesDay />
      <PreFooter />
      <Footer />
    </div>
  );
}

export default App;
