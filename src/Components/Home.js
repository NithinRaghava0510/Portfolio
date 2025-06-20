import React from 'react';
import Lottie from 'lottie-react';
import SpaceBoy from '../LottieFiles/SpaceBoy.json';
import Typed from './Typed.js';
import Tilt from 'react-parallax-tilt';
const Home = () => {                                                                                                                                                                                                                                                                                                                                                     
    return (
        <div >
            <div className='HomePage'>

                <div className='HomeText'>
                    <h1>Hi There!</h1>
                    <h1>I'm <b style={{ color: '#9067C6',filter: 'drop-shadow(0 0 8px #9067C6)' }}>Nithin Raghava Aitha</b></h1>
                    <Typed />
                </div>
                <Tilt>
                    {/* <img className=''style={{ height: "60vh", width: "40vw",transform: 'translateX(-100px)' }}  src={image} alt="" /> */}
                    <Lottie
                        className="illustration"
                        animationData={SpaceBoy}
                        loop={true}
                    />
                </Tilt>

            </div>
        </div>
    );
};

export default Home;