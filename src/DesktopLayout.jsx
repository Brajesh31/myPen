import React,{useState} from "react"
import Editor from "./Editor"
import uselocalStorage from './useLocalStorage'
import './Editor.css'
export default function DesktopLayout(){
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
            <div className="top">
                <Editor className='onClickHtml' panelName={'HTML'} language={'xml'} value={html} onChange={setHtml}/>
                <Editor className='onClickCSS' panelName={'CSS'} language={'css'} value={css} onChange={setCss}/>
                <Editor className='onClickJS' panelName={'JS'} language={'js'} value={js} onChange={setJs}/>
            </div>
            <div className="bottom">
          <iframe
           title='output' 
           srcDoc={srcDoc} width="100%" height='100%' sandbox='allow-scripts' frameBorder="0"></iframe>
        </div>
        </>
    )
}