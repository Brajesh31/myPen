import { useState } from "react"
import ME from "./ME"
import uselocalStorage from './useLocalStorage'
import './MobileLayout.css'
export default function MobileLayout(){
    const [html,setHtml] = uselocalStorage('html','')
    const [css,setCss] = uselocalStorage('css','')
    const [js,setJs] = uselocalStorage('js','')
    const srcDoc = `
  <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
  </html>`

    return(
        <>
        <div className="MobileLayoutParent">
            <div className="allBtn">
                <button className="mobileEditorBtn" onClick={()=>{
                    let e1 = document.querySelector('.mobilePanel1')
                    e1.style.display = 'flex'
                    let e2 = document.querySelector('.mobilePanel2')
                    e2.style.display = 'none'
                    let e3 = document.querySelector('.mobilePanel3')
                    e3.style.display = 'none'
                }}>HTML</button>
                <button className="mobileEditorBtn" onClick={()=>{
                    let e1 = document.querySelector('.mobilePanel1')
                    e1.style.display = 'none'
                    let e2 = document.querySelector('.mobilePanel2')
                    e2.style.display = 'flex'
                    let e3 = document.querySelector('.mobilePanel3')
                    e3.style.display = 'none'
                }}>CSS</button>
                <button className="mobileEditorBtn" onClick={()=>{
                    let e1 = document.querySelector('.mobilePanel1')
                    e1.style.display = 'none'
                    let e2 = document.querySelector('.mobilePanel2')
                    e2.style.display = 'none'
                    let e3 = document.querySelector('.mobilePanel3')
                    e3.style.display = 'flex'
                }}>JS</button>
            </div>
            <div className="mobilePanel1">
                <ME className='onClickHtml' panelName={'HTML'} language={'xml'} value={html} onChange={setHtml}/>
            </div>
            <div className="mobilePanel2">
            <ME className='onClickCSS' panelName={'CSS'} language={'css'} value={css} onChange={setCss}/>
            </div>
            <div className="mobilePanel3">
            <ME className='onClickJS' panelName={'JS'} language={'js'} value={js} onChange={setJs}/>
            </div>
            <div className="bottom">
          <iframe
           title='output' 
           srcDoc={srcDoc} width="100%" height='100%' sandbox='allow-scripts' frameBorder="0"></iframe>
        </div>
        </div>
        </>
    )
}