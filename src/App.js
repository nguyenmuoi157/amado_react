import React, { Component } from 'react';
import './App.css';
import AppRouter from './app/routes/router'
import Footer from './app/components/layout/Footer'
class App extends Component {
  render() {
    return (
      <>
        <AppRouter />
        <Footer />
      </>
    );
  }
}

export default App;
