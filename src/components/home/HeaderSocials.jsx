import React from 'react';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si'

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://github.com/callahanhinckley' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

            <a href='https://www.linkedin.com/in/callahan-hinckley/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>

            <a href='https://www.facebook.com/callahan.hinckley/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaFacebookF />
            </a>

            <a href='https://www.instagram.com/callahanhinckley/?hl=en' className='home__social-link' target='__blank' rel='noreferrer'>
                <FaInstagram />
            </a>
        </div>
    );
};

export default HeaderSocials;
