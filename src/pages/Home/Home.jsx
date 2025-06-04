import profile from '../../assets/logo.jpg';
import GlobalButton from '../../components/GlobalButton/GlobalButton';
import Slideshow from '../../components/SlideShow/SlideShow';
import { useNavigate } from 'react-router-dom';
import '../Home/home.style.css';



const Home = () => {
    const navigate = useNavigate();
    const handleContact = () => {
        navigate('/kontakt');
    };


    return (
            <div className='home_wrapper'>
                <Slideshow />
                <div className='homesection'>
                    <div className='profile_image'>
                    <img src={profile} alt="My profile image" />
                    </div>
                    <div className='homepagesection_right'>
                        <h3>Бирај фолклор, бирај Чајавец</h3>
                        <h1>КУД "Чајавец" врши упис нових чланова</h1>
                        <p>
                            За више информација контактирајте нас путем телефона 066/938-114 или путем е-поште кликом на дугме.
                        </p>
                        <GlobalButton text="Контактирајте нас" handleClick={handleContact} className='home_button' />
                    </div>
                </div>
            </div>
    );
};

export default Home;
