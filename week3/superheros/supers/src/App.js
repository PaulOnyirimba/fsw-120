import React from 'react'
import './index.css';
import Header from './Components/Header.js'
import SuperHeroList from './SuperHeroList.js'
import Footer from './Components/Footer.js'

function App() {

  return (
    <div>
      <Header />
      <SuperHeroList />
      <Footer />
    </div>
  )
}

export default App;
