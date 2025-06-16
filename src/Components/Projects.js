import React from 'react';
import ProjectBox from './ProjectBox';
// import AadviImage from '../images/aadvi.png';
import FinanceTracker from '../images/Finance Tracker.png';
import LostFound from '../images/Lost Found.png'
import TaskTracker from '../images/TaskTracker.png'
import WriteUp from '../images/WriteUp.png'

const Projects = () => {
    return (
        <div style={{  }}>
            <h1 className='projectHeading'>My <b>Projects</b></h1>
            <div className='project'>
                <ProjectBox projectPhoto={FinanceTracker} projectName="Finance Tracker" />
                <ProjectBox projectPhoto={LostFound} projectName="Lost/Found" />
                <ProjectBox projectPhoto={TaskTracker} projectName="TaskTracker" />
                <ProjectBox projectPhoto={WriteUp} projectName="WriteUp" />
            </div>
        </div>
    );
};

export default Projects;
