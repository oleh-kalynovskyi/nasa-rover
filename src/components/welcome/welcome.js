import React from 'react';
import { NavLink } from 'react-router-dom';

import './welcome.css'

export default function Welcome() {
    return (
        <div className="welcome">
            <div className="welcome-text">
                We live in a very interesting time when everything is changing dramatically soon, and we are one of the first generations for which an environment where you were born is very different from an environment when you are old. 
                <br />
                <br />

                Now you have the opportunity explore NASA`s expeditions to Mars. 
                Go to the <NavLink to='/main' className='Rovers-link'> 
                        Rovers 
                    </NavLink> tab in the upper right corner of the screen.
                Select a Rover, Сamera and one day from the expedition to see photos taken by rovers in this day
            </div>
        </div>
    )
}
