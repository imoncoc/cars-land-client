import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Headers from './components/Home/Headers/Headers';
import { Outlet } from 'react-router-dom';
import Footer from './shared/Footer/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Headers></Headers>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App