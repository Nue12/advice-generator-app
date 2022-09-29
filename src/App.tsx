import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import AdviceCard from './component/AdviceCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="App">
      <AdviceCard />
    </main>
  )
}

export default App
