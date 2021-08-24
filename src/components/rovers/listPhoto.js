import React, {useState} from 'react';
import './listPhoto.css';

import ModalPhoto from './ModalPhoto';

import Button from '@material-ui/core/Button';



export default function ListPhoto({ListPhoto, increment, decrement, page }) {

    const [bigPhoto, setBigPhoto] = useState();
    const [openModal, setOpenModal] = useState(false);

    const openPhoto = (photo) => {
        setBigPhoto(photo)
        setOpenModal(true)
    }
    const Close = () => {
        setOpenModal(false)
    }
    console.log(ListPhoto);
    return (
        <div className='ListPhoto'>
            {/* <h3>Photos</h3> */}
            <div className="ListPhoto-wrapper">
                {
                    ListPhoto && ListPhoto.map( el => {
                        return(
                            <div className="photos_item"
                                key={el.id}
                                onClick={ ()=> openPhoto(el.img_src)}> 
                                <img src={el.img_src} alt="" width='300px' height='300px' />
                                <div className="photos_item-info">
                                    <span> Photo from {el.earth_date} day on Earth </span>
                                    <span> and {el.sol} sol on Mars </span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            { openModal ? <ModalPhoto bigPhoto={bigPhoto} Close={Close} /> : null }

            <div className="load">

                <Button 
                    disabled={ page <= 1 }
                    onClick={ ()=> decrement() }
                    variant="contained" 
                    color="primary">
                    Prev Page
                </Button>

                <Button 
                    onClick={ ()=> increment()}
                    variant="contained" 
                    color="primary"
                    disabled={ListPhoto.length < 25}>
                    Next Page 
                </Button>
            </div>

        </div>
    )
}
 