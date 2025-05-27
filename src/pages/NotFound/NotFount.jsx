import { useNavigate } from 'react-router-dom';
import error from '../../assets/404.png';
import GlobalButton from '../../components/GlobalButton/GlobalButton';
import './notfound.style.css'

const NotFound = () => {
    const navigate = useNavigate();
    const handleNotFound = () => {
        navigate('/');
    };


    return (
        <div className='notfound_wrapper'>
            <h1>„Оп, путања ка страници промашена!“</h1>
            <img src={error} alt="404" className="error" />
            <GlobalButton text="Вратите се на почетну" handleClick={handleNotFound} className='global_button' />
            <h3 className='subheading'>Изгледа да си залутао к’о млади у коло – кад крену лијевом, а сви десном!
                Страница коју тражиш отишла је на пробу у КУД "Чајавец" и још се није вратила.
            </h3>

        </div>
    )
}

export default NotFound;