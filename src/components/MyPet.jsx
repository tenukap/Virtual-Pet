import { useEffect, useRef, useState } from "react";
import eye01 from '../assets/Robot/Eye/eye01.png'
import eye02 from '../assets/Robot/Eye/eye02.png'
 

const onboot_images = [eye01,eye02]
const sleeping = import.meta.glob('../assets/Robot/Sleeping/*.png',{eager : true})

export default function AutoImageSwitcher(){
    const sleepingframes = Object.values(sleeping).map(m => m.default)
    const [currentIndex , setCurrentIndex] = useState(0);
    const [sleepindex , setSleepIndex] = useState(0);
    const sleepIndexset = useRef(0);
    const [mode, setMode] = useState("onboot")
    

    useEffect(()=>{
        const interval = setInterval(()=>{
            //cycle throught boot images 
            setCurrentIndex((prev)=>(prev === onboot_images.length -1 ? 0: prev+1));
           
            sleepIndexset.current += 1;
            //check if sleep index is met requirment
            if(sleepIndexset.current > 4){
                setMode("sleeping")
                 setSleepIndex((prev)=> (prev == sleepingframes.length -1? 0:prev +1));
            }
        }, 1000);

        return()=> clearInterval(interval);
    },[]);

    return(
        <div style={{background:"transparent"}}>
            {mode == "onboot" && <img src={onboot_images[currentIndex]} alt="Robot Eye movement" draggable="false"/>}
           {mode == "sleeping" && <img src={sleepingframes[sleepindex]} alt="Robot sleeping movement" draggable="false"/>}
        </div>
    )
}