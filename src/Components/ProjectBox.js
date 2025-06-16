import React from 'react';
import {FaGithub} from 'react-icons/fa';


const  ProjectBox = ({projectPhoto, projectName}) => {
    const desc = {
        'Finance TrackerDesc' : 'Reactjs, Axios, Nodejs, Expressjs, PostgreSQL, Concurrently, Dotnev',
        'Finance TrackerGithub' : 'https://github.com/NithinRaghava0510/finance-tracker.git',
        'Finacne TrackerWebsite' : '',

        'Lost/FoundDesc' : 'Reactjs, Axios, React Router, Nodejs, Expressjs, JSON Web Tokens, Multer, PostgreSQL',
        'Lost/FoundGithub' : 'https://github.com/NithinRaghava0510/lost-found-app.git',
        'Lost/FoundWebsite' : '',

        'TaskTrackerDesc' : 'Angular 19, TypeScript, ASP .NET, Entity Framework, PostgreSQL',
        'TaskTrackerGithub' : 'https://github.com/NithinRaghava0510/TaskTrackr.git',
        'TaskTrackerWebsite' : '',

        'WriteUpDesc' : 'Nodejs, Express, EJS, HTML5, CSS#, BootStrap',
        'WriteUpGithub' : 'https://github.com/NithinRaghava0510/WriteUp.git',
        'WriteUpWebsite' : '',
    };
    let show ='';
    if(desc[projectName + 'Github']===''){
        show='none';
    }
    return (
        <div className='projectBox'> 
            <img className='projectPhoto' src={projectPhoto} alt="Project display" />
            <hr/> 
            <div>
                <br />
                <h3>{projectName}</h3>
                <br />
                {desc[projectName + 'Desc']}
                <br />

                <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank' rel="noreferrer">
                    <button className='projectbtn'><FaGithub/> Github</button>
                </a>

                {/* <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a> */}
            </div>
        </div>
    );
};

export default  ProjectBox;