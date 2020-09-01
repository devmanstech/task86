import React from 'react';
import logo from './logo.svg';
import './App.css';
// import './tailwind.output.css';
import Header from './Views/Header'
import Footer from "./Views/Footer";
import Sidebar from "./Views/Sidebar";
function App() {
  return (
      <>
          <div className="wrapper-all-except-footer center-footer">
              <Header />
              <Sidebar />
              <div className="push" />
          </div>
          <Footer />
      </>
  );
}

export default App;
