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

const [Dark,setDark]=useState(false)
 
  return (
    <>
    <div className={`${Dark ? "bg-white text-black" : "bg-black text-gray-400"} min-h-screen transition-all duration-300`}>
<Nav Dark={Dark} setDark={setDark}/>
<Bigimg/>
<Middlehead textnormal="Create stunning" textnorma2="Bentos" textspecial=" 10x faster" Dark={Dark} setDark={setDark}/>
<Middletext text1="Join the waitlist to get free Bento templates delivered as " text2="they’re created, along with practical design tips."/>
  <Form button="Get your first template"/>
  <div className='max-w-fit ml-auto mr-auto mt-4'>
    <p className='text-gray-400 '>Join 2,943+ creators. No spam guarantee. <div className='ml-16'>Unsubscribe anytime</div></p>
  </div>
  <div className='max-w-fit ml-auto mr-auto sm:flex sm:justify-center sm:items-center'>
  <Boxes svg={<Figma />} title="Templates in Figma" content="Every two weeks ,I'll send you exclusive early access to new templates before they're officially released on the website" Dark={Dark} setDark={setDark}/>
  <Boxes svg={<Zap/>} title="Latest updates" content="I&apos;ll also share practical content focused on visual design, modern design trends I've discovered, and any valuable updates." Dark={Dark} setDark={setDark}/>
  </div>
  </div>
  </>
  )
}

export default App
