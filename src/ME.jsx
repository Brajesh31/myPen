import React,{useState} from "react"
import './Editor.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from "react-codemirror2"

export default function ME({panelName, language,value,onChange}){
    function handelChange(editor,data,value){
        onChange(value)
    }

    const [open,setOpen] = useState(true);
    
    return(
        <>
        <div className={`panel ${open?'':'collapsed'}`}>
            <div className="title">
                <h2 className="panelTitle">{panelName}</h2>
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
                lineNumbers: false
            }}
            />
        </div>
        </>
    )
}