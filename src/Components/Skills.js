import React from 'react';
import { FaReact, FaCss3Alt,FaDocker, FaGitAlt,FaAngular, FaGithub,FaAws,FaJava, FaHtml5, FaBootstrap, FaPython } from 'react-icons/fa';
import { DiNodejs, DiJavascript1,DiMysql } from 'react-icons/di';
import { SiExpress, SiPostgresql,SiPostman,SiTypescript,SiSpringboot,SiDjango,SiTailwindcss,SiMongodb } from 'react-icons/si';
const Skills = ({ skill }) => {
    const icon = {
        Javascript: <DiJavascript1 />,
        React: <FaReact />,
        Node: <DiNodejs />,
        Express: <SiExpress />,
        Postgres: <SiPostgresql />,
        MongoDb: <SiMongodb />,
        Git: <FaGitAlt />,
        MySQL: <DiMysql />,
        Postman:<SiPostman/>,
        Github: <FaGithub/>,
        CSS:<FaCss3Alt/>,
        Bootstrap: <FaBootstrap />,
        Tailwind:<SiTailwindcss />,
        Docker:<FaDocker />,
        Html:<FaHtml5 />,
        AWS:<FaAws/>,
        Python:<FaPython/>,
        Java:<FaJava/>,
        Angular:<FaAngular/>,
        Typescript:<SiTypescript/>,
        Springboot:<SiSpringboot/>,
        Django:<SiDjango/>
    };

    return (
        <div title={skill} className='SkillBox'>
            {icon[skill]}
        </div>
    );
};

export default Skills;
