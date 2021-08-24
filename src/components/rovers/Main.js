import React, {useEffect, useState} from 'react';
import ListPhoto from './listPhoto';
import AboutRover from './AboutRover';

import './main.css';

const api_key = 'MPWIiTpa3kdUM9TQPdD3dGyg7RqxrTpz7qQcPFIg'

export default function Main() {

    const [Rover, setRover] = useState('')
    const [Camera, setCamera] = useState('')
    const [sol, setSol] = useState('')
    const [page, setPage] = useState(1)

    // const [isLoading, setIsLoading] = useState(true)

    const [aboutRover, setAboutRover] = useState([])

    const [arrCamera, setArrCamera] = useState([])

    const [listPhoto, setListPhoto] = useState([])

    const Opportunity = [ 
        { Abb: 'FHAZ', Cam: 'Front Hazard Avoidance Camera' }, 
        { Abb: 'RHAZ', Cam: 'Rear Hazard Avoidance Camera' }, 
        { Abb: 'MAST', Cam: 'Mast Camera' }, 
        { Abb: 'CHEMCAM', Cam: 'Chemistry and Camera Complex' }, 
        { Abb: 'MAHLI', Cam: 'Mars Hand Lens Imager' }, 
        { Abb: 'MARDI', Cam: 'Mars Descent Imager' }, 
        { Abb: 'NAVCAM', Cam: 'Navigation Camera' }, 
    ];
    const Curiosity = [ 
        { Abb: 'FHAZ', Cam: 'Front Hazard Avoidance Camera' }, 
        { Abb: 'RHAZ', Cam: 'Rear Hazard Avoidance Camera' }, 
        { Abb: 'NAVCAM', Cam: 'Navigation Camera' }, 
        { Abb: 'PANCAM', Cam: 'Panoramic Camera' }, 
        { Abb: 'MINITES', Cam: 'Miniature Thermal Emission Spectrometer (Mini-TES)' }, 
    ];
    const Spirit = [ 
        { Abb: 'FHAZ', Cam: 'Front Hazard Avoidance Camera' }, 
        { Abb: 'RHAZ', Cam: 'Rear Hazard Avoidance Camera' }, 
        { Abb: 'NAVCAM', Cam: 'Navigation Camera' }, 
        { Abb: 'PANCAM', Cam: 'Panoramic Camera' }, 
        { Abb: 'MINITES', Cam: 'Miniature Thermal Emission Spectrometer (Mini-TES)' }, 
    ];

    // camera=${ Camera }&earth_date=${ date }&page=${ page }&
    useEffect( () => {
        fetch( Rover ? `https://api.nasa.gov/mars-photos/api/v1/rovers/${ Rover }/photos?sol=${ sol }&page=${ page }&camera=${ Camera }&api_key=${api_key}` : null)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setListPhoto(data.photos);
        })
        .catch( () => console.log() );

        fetch( Rover ? `https://api.nasa.gov/mars-photos/api/v1/manifests/${ Rover }/?api_key=${api_key}` : null )
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setAboutRover(data)
        })
        .catch( () => console.log() )

    }, [Rover, Camera, sol, page])

    const camFunc = (el) => {
        if( el === 'Curiosity' ) {
            setArrCamera(Curiosity)
        }
        if( el === 'Opportunity' ) {
            setArrCamera(Opportunity)
        }
        if( el === 'Spirit' ) {
            setArrCamera(Spirit)
        }
    }

    const increment = () => {
        setPage(page + 1)
    }
    const decrement = () => {
        setPage(page - 1);
    }

    return (
        <div className='Main'>

            <div className="left-bar">
            <div className="form-wrapper">
                <form className="form-filters">
                    <label>
                        Rover: 
                        <select
                            value={Rover}
                            autoComplete="off"
                            onChange={(e) =>{ setRover( e.target.value ); camFunc(e.target.value)} }
                            >
                                <option value="">Select Rover</option>
                                <option value="Curiosity">Curiosity</option>
                                <option value="Opportunity">Opportunity </option>
                                <option value="Spirit">Spirit</option>
                        </select>
                    </label>

                    <label>
                        Camera: 
                        <select
                            value={Camera}
                            autoComplete="off"
                            onChange={(e) => setCamera( e.target.value ) }
                            >
                            { arrCamera && arrCamera.map( (el, i) => {
                                return(
                                    <option value={el.Abb} key={i}> { el.Cam } </option>
                                )
                            } )}
                        </select>
                    </label>

                    <label>
                        Set Sol {Rover ? `from 0 to ${aboutRover.photo_manifest && aboutRover.photo_manifest.max_sol}:` : null}
                        <input type="number"
                            min={0} 
                            max={ aboutRover.photo_manifest && aboutRover.photo_manifest.max_sol}
                            onChange={ (e) => setSol(e.target.value) }>
                        </input>

                    </label>

                </form>

                {Rover ? <AboutRover rover={aboutRover} /> : null } 

            </div>
            </div>

            { listPhoto.length <= 1 
                ? 
                <div className="setSearch">
                    <div className="isFetching"></div> 

                    {Rover ?
                        <div className="setSearch-text">
                            Nothing was found for your query. Change Camera or Sol to continue the search.
                        </div>
                        : 
                        <div className="setSearch-text">
                            Select Rover, Camera and Sol for search photos
                        </div>
                    }

                </div>
                : 
                <ListPhoto 
                    ListPhoto={listPhoto} 
                    increment={increment} 
                    decrement={decrement}
                    page={page}  />
            }

        </div>
    )
}
