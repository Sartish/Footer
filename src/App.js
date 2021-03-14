// write components here 
//always in every react file is to import react from react 

import React from 'react'
import Footer from './components/Footer/Footer.js';
import Links from './components/Links/Links.js';
import Colors from './components/Colors/Colors.js';

const App = () => {
  return (
    <>
      <Footer />
      <Colors />
      <Links /> 
    </>
  )
}

export default App;

