import './App.css'
import { Routes, Route } from 'react-router-dom'
import Landing from './views/Landing/Landing'
import About from './components/About/About'
import Hero from './components/Hero/Hero'
import Porfolio from './components/Porfolio/Porfolio'
import Contact from './components/Contact/Contact'


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/hero' element={<Hero/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/porfolio' element={<Porfolio/>} />
        <Route path='/contact' element={<Contact/>} />

      </Routes>
    </>
  )
}

export default App
