import './App.css'
import Card from './Components/Card'
import Footer from './Components/Footer'
import Form from './Components/Form'
import Navbar from './Components/Navbar'

function App() {


  return (
    <>
    <div>
    <Card />
    <Footer />
    <Form />
    <Navbar />
    </div>
    
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/contacto' element={<Contact/>} />
    <Route path='/detail' element={<Detail/>} />
    <Route path='/favs' element={<Favs/>} />
    </Routes>
  
  
    </>
  )
}

export default App
