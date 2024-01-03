import React from "react";
import image from './assets/image.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons'; // Use faLinkedinIn for LinkedIn

const BusinessCard = () => {

    const skills = [
        "C#",
        "Python",
        ".NET Core",
        "JavaScript (ES6+)",
        "ReactJS",
        "SQL"
    ]
    return (
        <div className="max-w-sm mx-auto bg-black shadow-md rounded-lg overflow-hidden text-white">
           
            <img src={image} alt="Business Card" className="w-full" />

            <div className="px-6 py-4">  
                <div className="flex justify-center items-center flex-col mb-3">
                    <div className="font-bold text-xl ">Urooj Akram</div>
                    <p className="font-bold text-base">Software Developer</p>
                </div>
                <div className="flex justify-center">
                <div className="mt-1">
                    <button className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded mr-2">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Email
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        <FontAwesomeIcon icon={faLinkedinIn} className="mr-2" /> LinkedIn
                    </button>
                </div>
                </div>
                <p className="text-gray-200 text-base font-bold mt-6">About</p>
                <p className="text-gray-600 text-sm mt-2">
                A talented Software Engineer aspiring to gain a full-time position in a reputed company. Gained extensive experience in software development, testing, and deployment through internships.
                A highly motivated and hardworking individual skilled in Java, SQL, and Python. Seeking a position to utilize the gained skills and experience to positively contribute to the company.
                </p>
                <p className="text-gray-200 text-base font-bold mt-6">Skills</p>
                <div className="flex flex-wrap mt-2">
                        {skills.map((skill,index) => (
                            <div key={index} className="bg-gray-300 text-gray-800 font-semihold rounded-full px-3 py-1 text-sm mr-2 mb-2">
                                {skill}
                            </div>
                        ))}
                </div>
            </div> 
            <div className="mt-3 flex justify-center py-2 bg-gray-300 ">
                    <a className="mr-4">
                    <FontAwesomeIcon icon= {faEnvelope} size="2x" style={{ color: 'black' }}/>
                    </a>
                    <a className="mr-4">
                    <FontAwesomeIcon icon= {faGithub} size="2x" style={{ color: 'black' }} />
                    </a>
                    <a className="mr-4">
                    <FontAwesomeIcon icon= {faLinkedinIn} size="2x" style={{ color: 'black' }}/>
                    </a>
                    <a className="mr-4">
                    <FontAwesomeIcon icon= {faYoutube} size="2x" style={{ color: 'black' }}/>
                    </a>
                </div>
        </div>
    )
}

export default BusinessCard;
