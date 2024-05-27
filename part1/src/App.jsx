import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import Blockchain from './components/Blockchain'
import ScrollableList from './ScrollableList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar /> 
      <Blockchain/>
      
      <ScrollableList />
      </>
  )
}

export default App
