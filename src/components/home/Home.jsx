import React from 'react';
import './Home.css';
import Me from '/Users/calhinck/Documents/GitHub/callahanhinckley.github.io/src/assets/CalTyke1_2-removebg-preview.png';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    return (
        <section className="home container" id='home'>
            <div className="intro">
                <img src={Me} alt="" className='home__img' width='65' />
                <h1 className="home__name">Callahan Hinckley</h1>
                <span className="home__education">I'm a Product Manager</span>

                <HeaderSocials />

                <a href="#contact" className="btn"> Contact Me!</a>

                <ScrollDown />
            </div>

            <Shapes />
        </section>
    )
}

export default Home