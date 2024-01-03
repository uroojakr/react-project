import './index.scss'
import AnimatedLetter from '../AnimatedLetters'
import { useEffect, useState } from 'react';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        const timerId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    
        return () => {
            clearTimeout(timerId); 
        };
    }, []);
    
    return(
        <>
        <div className="container about-page">
            <div className='text-zone'>
                <h1>
                    <AnimatedLetter 
                    strArray= {['A','b','o','u','t',' ','m','e']}
                    idx={15}
                    />
                </h1>
                <p>
                Welcome to my digital domain! I'm passionate about transforming ideas into immersive online experiences that captivate and engage users.
                </p>
                <p>
                Challenges fuel my passion. Whether it's debugging complex issues or optimizing performance, I approach each problem as an opportunity to innovate and refine my craft.
                </p>
                <p>
                This space is where I showcase my portfolio of projects, each a testament to my dedication and expertise. I'm excited about the prospect of collaborating with you to bring your digital ideas to fruition.
                </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                    <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div className='face2'>
                    <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face3'>
                    <FontAwesomeIcon icon={faCss3} color="#28AD4D9" />
                    </div>
                    <div className='face4'>
                    <FontAwesomeIcon icon={faReact} color="#5ED4FA" />
                    </div>
                    <div className='face5'>
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className='face6'>
                    <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default About