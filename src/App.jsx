
import './App.css'
import Nav from '../components/nav/Nav'
import Login from '../components/login/Login'
import Sign from '../components/sign/Sign'
import { Routes, Route } from "react-router-dom"

function App() {
 

  return (
    <>
    <div className="container">
      <Nav />
      <Routes> 
      <Route path ="/" element ={<Login />} />
      <Route path ="/signup" element = {<Sign />} />
      </Routes>
    </div>
    </>
  )
}

export default App
