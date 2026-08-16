import { useEffect, useState } from "react";
import eye01 from '../assets/Robot/Eye/eye01.png'
import eye02 from '../assets/Robot/Eye/eye02.png'

const images = [eye01,eye02]
export default function AutoImageSwitcher(){

    const [currentIndex , setCurrentIndex] = useState(0);


    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentIndex((prev)=>(prev === images.length -1 ? 0: prev+1));
        }, 1000);

        return()=> clearInterval(interval);
    },[]);

    return(
        <div style={{background:"transparent"}}>
            <img src={images[currentIndex]} alt="Robot Eye movement" draggable="false"/>
        </div>
    )
}