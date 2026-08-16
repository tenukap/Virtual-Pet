import { useState } from "react";
import MyPet from "./components/MyPet"
import "./App.css"

function App(){
    return(
        <div data-tauri-drag-region style={{background:"transparent",width:"100vw",
    height:"100vh",}}>
            <MyPet/>
        </div>
    )
}
export default App