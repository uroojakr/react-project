import React from "react";
import './HeroStyle.css';
import gridImage from '../../images/photo-grid.png'

export default function Hero(){
    return(
        // <>
        // <div className="hero--parentgrid">
        //   <img src={gridImage} className="hero--grid"/>
        // </div>
        // <div className="hero--textcenter">
        //     <h1>Online Experiences</h1>
        //     <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        // </div>
        // </>
        <section>
             <img src={gridImage} className="hero--grid"/>
             <h1 className="hero--header">Online Experiences</h1>
             <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}