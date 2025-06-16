import React from 'react';
import Tilt from 'react-parallax-tilt';
import Lottie from 'lottie-react';
import Coder from '../LottieFiles/coder.json';

const About = () => {
    return (                                                                                                                            
        <div className='AboutPage'>
            <div className='AboutText'>
                <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
                <p>
            Hi, I'm <b>Nithin Raghava</b> and I am from Arlington, Virginia.
            I'm a <b>Full stack developer</b> expertised in Node.js, Django, Springboot, React and Angular. <br/><br/>
            I have completed my master's in <b>Computer Science</b> from <b>George Washington University</b>. <br/><br/>
            I love creating projects that push boundaries, explore new things and have better functionalities, you can check out some of my work in the projects section.<br/><br/>
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/><br/>
            Apart from coding, I love to do <b>travelling, gaming and trying new things.</b> </p>
            </div>

            <div>
                <Tilt>
                    <Lottie
                        className="illustration" 
                        animationData={Coder} 
                        loop={true} 
                    />
                </Tilt>
            </div>

        </div>      

    );
};

export default About;