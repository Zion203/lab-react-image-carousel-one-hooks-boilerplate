import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Carousel() {
    let [currIndex, setCurrIndex] = useState(0);
    function moveBackward(){
        if(currIndex <= 0){
            setCurrIndex(images.length-1)
        }else{
            setCurrIndex(currIndex-1)
        }
    }

    function moveForward(){
        if(currIndex == images.length-1){
            setCurrIndex(0)
        }else{
            setCurrIndex(currIndex+1)
        }
    }
    return (
        <>
            <div id="main">
            <ArrowBackIosIcon onClick ={moveBackward} />
            <div>
                <img src={images[currIndex].img} alt="" />
                <div id="text-img">
                    <h1 id="title" className="texts">{images[currIndex].title}</h1>
                    <p className="texts" id="subtitle">{images[currIndex].subtitle}</p>
                </div>
            </div>
            <ArrowForwardIosIcon onClick={moveForward} />
        </div>
        </>
    )
}



export default Carousel;