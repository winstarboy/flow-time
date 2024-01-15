import { useState } from 'react'
import Login from './components/Login'
import './App.css'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
    <header>
      <h1 className='header'>Context API</h1>
    </header>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
