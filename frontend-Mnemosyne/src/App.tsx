import { useRef } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Wellcome from './Pages/Wellcome'
import SetUp from './Pages/SetUp'
import Game from './Pages/Game'
import './App.css'

function App() {
  const wordbank = useRef<string[]>([])


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Wellcome/>}/>
        <Route path="/Setup" element={<SetUp wordBankLst={wordbank}/>}/>
        <Route path="/Game" element={<Game wordBankLst={wordbank}/>}/>
      </Routes>
    </Router>
  )
}

export default App
