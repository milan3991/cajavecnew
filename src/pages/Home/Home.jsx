import profile from '../../assets/logo.jpg';
import GlobalButton from '../../components/GlobalButton/GlobalButton';
import Slideshow from '../../components/SlideShow/SlideShow';
import { useNavigate } from 'react-router-dom';
import '../Home/home.style.css';
import buyukcekmece from '../../assets/nagrade/buyukcekmece.jpg';
import carpati from '../../assets/nagrade/carpati.jpg';
import vitosha from '../../assets/nagrade/vitosha.jpg';
import Award from '../../components/Awards/AwardPart';


let awards = [
    {
        id: 1,
        image: buyukcekmece,
        header: `19. Интернационални фестивал 'Büyükçekmece' `,
        description: 'Награда публике'
    },
    {
        id: 2,
        image: carpati,
        header: `33. међународни фестивал фолклора 'CARPAŢI'`,
        description: '3. мјесто '

    },
    {
        id: 3,
        image: vitosha,
        header: `Међународни фестивал фолклора 'Vitosha 2017'` ,
        description: '2. мјесто'

    },
]


const Home = () => {
    const navigate = useNavigate();
    const handleContact = () => {
        navigate('/kontakt');
    };


    return (
        <div className='home_wrapper'>
            <Slideshow />
            <div className='content'>
                <div className='homesection'>
                    <div className='profile_image'>
                        <img src={profile} alt="My profile image" />
                    </div>
                    <div className='homepagesection_right'>
                        <h3>Бирај фолклор, бирај Чајавец</h3>
                        <h1 className='home_heading' >КУД "Чајавец" врши упис нових чланова</h1>
                        <p>
                            За више информација контактирајте нас путем телефона 066/938-114 или путем е-поште кликом на дугме.
                        </p>
                        <GlobalButton text="Контактирајте нас" handleClick={handleContact} className='home_button' />
                    </div>
                </div>
                <div className='awards'>
                    <h1 className='heading_awards'>НАГРАДЕ</h1>
                    <div className='awards_content'>
                        {awards.map((award) => (
                            <Award
                                key={award.id}
                                header={award.header}
                                image={award.image}
                                description={award.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
