import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Wellcome from './Pages/Wellcome'
import SetUp from './Pages/SetUp'
import Game from './Pages/Game'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Wellcome/>}/>
        <Route path="/Setup" element={<SetUp />}/>
        <Route path="/Game" element={<Game />}/>
      </Routes>
    </Router>
  )
}

export default App
