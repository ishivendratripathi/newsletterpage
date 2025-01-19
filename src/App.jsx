import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Boxes from './Components/Boxes'
import { Figma } from 'lucide-react';
import { Zap } from 'lucide-react'
import Nav from './Components/Nav'
import Bigimg from './Components/Bigimg'

function App() {
 
  return (
    <>
<Nav/>
<Bigimg/>
  <Boxes svg={<Figma />} title="Templates in Figma" content="Every two weeks ,I'll send you exclusive early access to new templates before they're officially released on the website"/>
  <Boxes svg={<Zap/>} title="Latest updates" content="I&apos;ll also share practical content focused on visual design, modern design trends I've discovered, and any valuable updates."/>
    </>
  )
}

export default App
