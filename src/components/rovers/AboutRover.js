import React from 'react';
import './AboutRover.css'

export default function AboutRover({rover}) {
    const Rover = rover.photo_manifest
    return (
        <div className='AboutRover'>
            <h3>About Rover</h3>
            <div className="AboutRover-text">
                The Rover {Rover && Rover.name} launch from Earth has occurred on {Rover && Rover.launch_date} and landing on 
                Mars has occurred on {Rover && Rover.landing_date}, the rover {Rover && Rover.status === 'active' ? 'is' : 'was'} on Mars for {Rover && Rover.max_sol} sol. 
                During this time, {Rover && Rover.name} Rover 
                maked {Rover && Rover.total_photos} photos. {Rover && Rover.status === 'active' ? `The ${Rover && Rover.name} continues to fulfill its mission today.` : `The ${Rover && Rover.name} has completed its mission on ${Rover && Rover.max_date}.`}
            </div>
        </div>
    )
}
