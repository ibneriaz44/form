import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import User from './User'
import FormSubmitSimple from './Components/FormSimple'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <h1>Bismillah</h1> */}
      <FormSubmitSimple />

    </div>
  )
}

export default App
