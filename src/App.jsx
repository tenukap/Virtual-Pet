import { useState } from "react";
import MyPet from "./components/MyPet"
import "./App.css"

function App(){
    return(
        <>
            <div 
                data-tauri-drag-region 
                style={{
                    background:"transparent",
                    width:"100vw",
                    height:"100vh",
                    position:"fixed",
                    top:0,
                    left:0,
                }}
            />
            <div style={{background:"transparent"}}>
                <MyPet/>
            </div>
        </>
    )
}
export default App