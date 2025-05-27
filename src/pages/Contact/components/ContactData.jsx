import '../contact.style.css'

const ContactMethod = ({ methodIcon, method, methodDetails, animation }) => {
    return (
        <div className='contact_method contact_layout_box'>
            <img src={methodIcon} className={`contact_method_icon contact_method_icon_${animation.toLowerCase().split(' ').pop()}`}></img>
            <div className='contact_method_info'>
                <h5>{method}</h5>
                {methodDetails.map((detail) => {
                    return <p key={detail}>{detail}</p>
                })}
            </div>
        </div>
    )
};

export default ContactMethod;