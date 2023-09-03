import React from 'react';
import './Education.css';
import Image from '../../assets/UNC Crest.png';
import Resume from '../../assets/resume.pdf';
import EducationBox from './EducationBox';

const Education = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="education container section" id="education">
            <h2 className="section__title">Education </h2>

            <div className="education__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="education__data grid">
                    <div className="education__info">
                        <p className="education__description_1">
                            I have a double major in Business Administration as well as Statistics and Analytics from The University of North Carolina at Chapel Hill. <br /><br />
                            I started off as a mathematics major, but I found the computational side of Statistics and Analysis to be more interesting. 
                            Here are some of the relevant statistics courses I took: 
                        </p>
                        <ul className="education__list_1">
                            <li>Stochastic Modeling</li>
                            <li>Probability</li>
                            <li>Optimization</li>
                            <li>Methods of Data Analysis</li>
                            <li>Advanced Data Science</li>
                            <li>Advanced Spreadsheet Modeling</li>
                            <li>Discrete Mathematics</li>
                            <li>Linear Algebra</li>
                            <li>Advanced Calculus</li>
                        </ul>
                        <p className="education__description_2">    
                            I have always dreamed of being an entrepreneur. I am a TechCrunch addict and love sending my brothers what startups I predict will have unicorn exits. 
                            Here are a few of the business courses that I took:
                        </p>
                        <ul className="education__list_2">
                            <li>Strategy - Business Level</li>
                            <li>Strategy - Industry Level</li>
                            <li>Consulting Skills and Frameworks</li>
                            <li>Data Science in the Business World</li>
                            <li>Groups and Teams in Orgs</li>
                            <li>Business Analytics</li>
                            <li>Operations Management</li>
                            <li>Financial Accounting</li>
                            <li>Negotiations</li>
                            <li>Business Ethics</li>
                        </ul>
                    </div>

                    {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            <EducationBox />
        </section>
    )
}

export default Education