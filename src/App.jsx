import { useState, useEffect } from 'react'
import DesktopLayout from './DesktopLayout'
import MobileLayout from './MobileLayout'
import NavBar from './NavBar'
import uselocalStorage from './useLocalStorage'
import './Editor.css'

function App() {
  const [html,setHtml] = uselocalStorage('html','')
  const [css,setCss] = uselocalStorage('css','')
  const [js,setJs] = uselocalStorage('js','')

  const [screenWidth,setScreenWidth] = useState(window.innerWidth)
  useEffect(()=>{
    const handelResize = () => {
      setScreenWidth(window.innerWidth)
    }
    window.addEventListener('resize',handelResize)
    return ()=>{
      window.removeEventListener('resize',handelResize)
    }
  },[])

  const breakpoint = 950
  return (
    <>
      <NavBar />
      <div className="parent">
        {screenWidth<breakpoint?(<MobileLayout/>):(<DesktopLayout/>)}
      </div>
    </>
  )
}

export default App
