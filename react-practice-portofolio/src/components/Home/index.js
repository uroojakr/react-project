import LogoTitle from "../../assets/images/u2.png"
import { Link } from "react-router-dom"
import AnimatedLetter from "../AnimatedLetters"
import { useState, useEffect } from "react"
import './index.scss'
import Logo from "./Logo"
import Loader from "react-loaders"

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');  
    const nameArray = ['r', 'o', 'o', 'j']
    const jobArray = [
      'w',
      'e',
      'b',
      ' ',
      'd',
      'e',
      'v',
      'e',
      'l',
      'o',
      'p',
      'e',
      'r',
      '.',
    ]

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    
        return () => clearTimeout(timeout); 
    }, []);
    
 
    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _ 12`}>i</span>
                <br/>
                <span className={`${letterClass} _ 13`}>I</span>
                <span className={`${letterClass} _ 14`}>'m</span>
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetter letterClass={letterClass}
                strArray={nameArray} 
                idx = {15}
                />
                <br />
                <AnimatedLetter letterClass={letterClass}
                strArray={jobArray} 
                idx = {22}
                />
                </h1>
                <h2>Frontend Developer</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <Logo />
        </div>
        <Loader type="pacman"/>
        </>
    )
}
export default Home