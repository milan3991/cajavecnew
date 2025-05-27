// components/SuccessModal/SuccessModal.jsx
import React from 'react';
import './SuccessModal.css';
import GlobalButton from '../GlobalButton/GlobalButton';

const SuccessModal = ({ onClose }) => {
    return (
        <div className="modal_overlay">
            <div className="modal_content">
                <h2>Успјешно послато!</h2>
                <p>Ваша порука се успјешно ухватила у коло са нашим сервером. Хвала вам што сте нас контактирали.</p>
                <GlobalButton text="Вратите се назад" handleClick={onClose} className='global_button' />
            </div>
        </div>
    );
};

export default SuccessModal;
