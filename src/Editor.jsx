import React,{useState} from "react"
import './Editor.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from "react-codemirror2"

export default function Editor({panelName, language,value,onChange}){
    function handelChange(editor,data,value){
        onChange(value)
    }

    const [open,setOpen] = useState(true);
    
    return(
        <>
        <div className={`panel ${open?'':'collapsed'}`}>
            <div className="title">
                <h2 className="panelTitle">{panelName}</h2>
                <h2 className="openClose" onClick={()=>{setOpen(prevOpen=>!prevOpen)}}>{open?<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-arrows-angle-contract" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707M15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707"/>
</svg>:<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-arrows-angle-expand" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707"/>
</svg>}</h2>
            </div>
            <ControlledEditor
            onBeforeChange={handelChange}
            value={value}
            className="codeWrapper"
            options={{
                lineWrapping: true,
                lint: true,
                mode: language,
                theme: "material",
                lineNumbers: true
            }}
            />
        </div>
        </>
    )
}