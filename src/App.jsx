import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Boxes from './Components/Boxes'
import { Figma } from 'lucide-react';
import { Zap } from 'lucide-react'
import Nav from './Components/Nav'
import Bigimg from './Components/Bigimg'
import Middlehead from './Components/Middlehead'
import Middletext from './Components/Middletext'
import Form from './Components/Form'

function App() {
 
  return (
    <>
<Nav/>
<Bigimg/>
<Middlehead textnormal="Create stunning" textnorma2="Bentos" textspecial=" 10x faster"/>
<Middletext text1="Join the waitlist to get free Bento templates delivered as " text2="they’re created, along with practical design tips."/>
  <Form button="Get your first template"/>
  <div className='max-w-fit ml-auto mr-auto mt-4'>
    <p className='text-gray-400 indent-8'>Join 2,943+ creators. No spam guarantee. Unsubscribe anytime</p>
  </div>
  <div className='max-w-fit ml-auto mr-auto'>
  <Boxes svg={<Figma />} title="Templates in Figma" content="Every two weeks ,I'll send you exclusive early access to new templates before they're officially released on the website"/>
  <Boxes svg={<Zap/>} title="Latest updates" content="I&apos;ll also share practical content focused on visual design, modern design trends I've discovered, and any valuable updates."/>
  </div>
  </>
  )
}

export default App
