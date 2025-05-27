import Heading from '../../components/Heading/Heading';
import ContactMethod from './components/ContactData';
import ContactInputField from './components/ContactForm';
import phoneicon from '../../assets/phone.svg';
import mailicon from '../../assets//mail.svg';
import locationicon from '../../assets/location.svg';
import './contact.style.css'
import GlobalButton from '../../components/GlobalButton/GlobalButton';
import ParallaxText from '../../components/ParallaxText/ParallaxText';
import { useState } from 'react';
import SuccessModal from '../../components/SuccessModal/SuccessModal';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/contact');
    };

    const [showModal, setShowModal] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        const formData = new FormData(form);
        const response = await fetch("https://formsubmit.co/m.mircic93@gmail.com", {
            method: "POST",
            body: formData,
        });

        if (response.ok) {
            setShowModal(true);
            form.reset();
        } else {
            alert("Грешка при слању поруке. Покушајте поново.");
        }
    };

    const contactInformations = [
        {
            id: 1,
            method: 'Телефон',
            animation: 'phone',
            methodDetails: [
                '+38766938114',
            ],
            icon: phoneicon
        },
        {
            id: 2,
            method: 'Електронска пошта',
            animation: 'mail',
            methodDetails: [
                'kudcajavec@gmail.com',
            ],
            icon: mailicon
        },
        {
            id: 3,
            method: 'Адреса',
            animation: 'address',
            methodDetails: [
                'Цара Лазара бр. 1',
                '78000 Бања Лука'
            ],
            icon: locationicon
        }
    ];

    return (
        <div>
            <ParallaxText heading='контакт' />
            {/* <Heading heading="КОНТАКТ" headingbackground="КОНТАКТ" /> */}
            <div className='contact_box'>

                <div className="contact_left contact_layout_box">
                    <h4 className='contact_header'>Контакт информације</h4>
                    <p className='contact_text'>За сва питања стојимо Вам на располагању, те нас можете контактирати путем контакт форме или на испод наведени телефонски број.</p>
                    {contactInformations.map((contactinfo) => {
                        return (
                            <ContactMethod
                                key={contactinfo.id}
                                method={contactinfo.method}
                                methodDetails={contactinfo.methodDetails}
                                methodIcon={contactinfo.icon}
                                animation={contactinfo.animation}
                            />
                        )
                    })}
                </div>

                <div className="contact_right contact_layout_box">
                    <form onSubmit={handleSubmit}>
                        <ContactInputField
                            displayName='Име и презиме'
                            name='contact_input_name'
                            id='contact_input_name'
                            type='text'
                            placeholder='Унесите ваше име...'
                        />
                        <ContactInputField
                            displayName='Адреса е-поште'
                            name='contact_input_email'
                            id='contact_input_email'
                            type='text'
                            placeholder='Унесите адресу е-поште...'
                        />
                        <ContactInputField
                            displayName='Наслов'
                            name='contact_input_subject'
                            id='contact_input_subject'
                            type='text'
                            placeholder='Унесите наслов поруке...'
                        />
                        <textarea placeholder='Ваша порука...' className='contact_input_field'></textarea>
                        <div>
                            <GlobalButton text="ПОШАЉИ" handleClick={handleBack} className='global_button' />
                            <input type="hidden" name="_captcha" value="false" />
                        </div>
                    </form>
                    {showModal && <SuccessModal onClose={() => setShowModal(false)} />}

                </div>

            </div>
        </div >
    )
}

export default Contact;