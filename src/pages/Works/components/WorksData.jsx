import React, { useState } from 'react';
import CustomCursor from '../../../components/CustomCursor/CustomCursor';
import '../works.style.css'

const WorksItem = ({ image, header, handleClick }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <>
            <CustomCursor active={hovered} />
            <div className='work_part' onClick={handleClick}>
                <h2>{header}</h2>
                <img src={image} onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    style={{ cursor: 'none' }}
                />
            </div>
        </>
    )
};

export default WorksItem;