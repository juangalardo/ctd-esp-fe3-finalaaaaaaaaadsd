import { Route, Routes } from 'react-router-dom'
import './App.css'
import Card from './Components/Card'
import Footer from './Components/Footer'
import Form from './Components/Form'
import Navbar from './Components/Navbar'
import Home from './Routes/Home'
import Detail from './Routes/Detail'
import Favs from './Routes/Favs'
import Contact from './Routes/Contact'

function App() {

  return (
    <>
    <div>
    <Navbar />
    <Card />
    <Footer />
    <Form />
    </div>
    
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/contacto' element={<Contact/>} />
      <Route path='/dentista/:id' element={<Detail/>} />
      <Route path='/favs' element={<Favs/>} />
    </Routes>
    
    </>
  )
}

export default App
