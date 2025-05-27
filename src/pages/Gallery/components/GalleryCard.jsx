// import '../gallery.style.css'

// const GalleryCard = ({ image, header, handleClick}) => {
//     return (
//         <div  className='gallery_part'>
//             <img onClick={handleClick} src={image}  className='gallery_card_image'/>
//             <h2 onClick={handleClick} className='gallery_header'>{header}</h2>
//         </div>
//     )
// };

// export default GalleryCard;

import React, { useState } from 'react';
import '../gallery.style.css';
import CustomCursor from '../../../components/CustomCursor/CustomCursor';

const GalleryCard = ({ image, header, handleClick }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <>
            <CustomCursor active={hovered} />
            <div
                className='gallery_part'
            >
                <img onClick={handleClick} src={image} className='gallery_card_image' 
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    style={{ cursor: 'none' }} // sakrij default kursor
                />
                <h2 onClick={handleClick} className='gallery_header'>{header}</h2>
            </div>
        </>
    );
};

export default GalleryCard;
