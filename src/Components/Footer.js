import React from 'react';
import {FaGithub, FaLinkedin,} from 'react-icons/fa';
import {GrMail} from 'react-icons/gr';




const Footer = () => {
    // const year = new Date().getFullYear();
    return (
        <footer>
            <h4>Developed by <b>Nithin Raghava</b></h4>
            {/* <h4><b>Copyright</b> &copy; {year} CV </h4> */}
            <div className='footerLinks'>
                <a href="https://github.com/NithinRaghava0510" target='_blank' rel="noreferrer"><FaGithub/></a>
                <a href="https://www.linkedin.com/in/nithin-raghava-aitha/" target='_blank' rel="noreferrer"><FaLinkedin/></a>
                <a href='mailTo:anithinraghava@gmail.com' target='_blank' rel="noreferrer"><GrMail/></a>
            </div>
        </footer>
    );
};

export default Footer;
