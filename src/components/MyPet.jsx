import { useEffect, useState } from "react";
import eye01 from '../assets/Robot/Eye/eye01.png'
import eye02 from '../assets/Robot/Eye/eye02.png'
 

const onboot_images = [eye01,eye02]
const sleeping = import.meta.glob('../assets/Robot/Sleeping/*.png',{eager : true})

export default function AutoImageSwitcher(){
    const sleepingframes = Object.values(sleeping).map(m => m.default)
    const [currentIndex , setCurrentIndex] = useState(0);
    

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentIndex((prev)=>(prev === onboot_images.length -1 ? 0: prev+1));
        }, 1000);

        return()=> clearInterval(interval);
    },[]);

    return(
        <div style={{background:"transparent"}}>
            <img src={onboot_images[currentIndex]} alt="Robot Eye movement" draggable="false"/>
        </div>
    )
}