import './style.awards.css'

const Award = ({ image, header, description }) => {
    return (
        <>
            <div className='award_part'>
                <img src={image} className='award_image' />
                <h2>{header}</h2>
                <h3>{description}</h3>
            </div>
        </>
    )
};

export default Award;