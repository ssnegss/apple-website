import { FC } from 'react'
import Navbar from './components/Header'
import Hero from './components/Hero'
import Highlights from './components/Highlights'

const App: FC = () => {

  return (
    <main className="main">
      <Navbar></Navbar>
      <Hero></Hero>
      <Highlights></Highlights>
    </main>
  )
}

export default App
