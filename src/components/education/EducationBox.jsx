import React from 'react'
import { RiFireLine, RiCupLine, RiGroupLine, RiTrophyLine } from 'react-icons/ri';

const EducationBox = () => {
    return (
        <div className="education__boxes grid">
            <div className="education__box">
                <RiFireLine className='education__icon' />

                <div>
                    <h3 className="education__title">3.90</h3>
                    <span className="education__subtitle">Cumulative GPA</span>
                </div>
            </div>

            <div className="education__box">
                <RiCupLine className='education__icon' />

                <div>
                    <h3 className="education__title">2</h3>
                    <span className="education__subtitle">Majors</span>
                </div>
            </div>

            <div className="education__box">
                <RiGroupLine className='education__icon' />

                <div>
                    <h3 className="education__title">133.5</h3>
                    <span className="education__subtitle">Credit Hours</span>
                </div>
            </div>

           {/*  <div className="education__box">
                <RiTrophyLine className='education__icon' />

                <div>
                    <h3 className="education__title">2</h3>
                    <span className="education__subtitle">Case Competition Wins</span>
                </div>
            </div> */}
        </div>
    )
}

export default EducationBox