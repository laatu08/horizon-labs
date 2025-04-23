import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WalletPage from './pages/Wallet'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WalletPage></WalletPage>
    </>
  )
}

export default App
