import React from 'react';
import './ModalPhoto.css';

import HighlightOffIcon from '@material-ui/icons/HighlightOff';

export default function ModalPhoto({bigPhoto, Close}) {
    return (
        <div className="ModalPhoto" 
            // style={{ backgroundImage:`url(${bigPhoto})`, backgroundSize: 'cover'  }}
            >
            <HighlightOffIcon color="secondary" onClick={()=> Close()} className='ModalPhoto-bnt' />
            <img src={bigPhoto} alt="" />
        </div>
    )
}
