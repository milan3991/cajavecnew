import '../contact.style.css'

const ContactInputField = ({ displayName, name, id, type, placeholder}) => {
    return (
        <div className='contact_input_field'>
            <label htmlFor={ id }>{ displayName }</label>
            <input id={ id } name={ name } type={ type } placeholder={ placeholder } required></input>
        </div>
    );
};

export default ContactInputField;