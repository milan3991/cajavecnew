import Heading from "../../components/Heading/Heading";
import '../Works/works.style.css'
import GalleryCard from "./components/GalleryCard";
import gallery1 from '../../assets/gallerythumbnail/gallery19.jpg';
import gallery2 from '../../assets/gallerythumbnail/gallery83.jpg';
import gallery3 from '../../assets/gallerythumbnail/gallery11.jpg';
import gallery4 from '../../assets/gallerythumbnail/gallery25.jpg';
import gallery5 from '../../assets/gallerythumbnail/gallery21.jpg';
import gallery6 from '../../assets/gallerythumbnail/gallery85.jpg';
import { useNavigate } from "react-router-dom";
import ParallaxText from "../../components/ParallaxText/ParallaxText";



const Gallery = () => {
    const navigate = useNavigate();

    const galleries = [
        {
            id: 1,
            header: "Концерт",
            image: gallery1,
        },
        {
            id: 2,
            header: "Путовање",
            image: gallery2,
        },
        {
            id: 3,
            header: "Проба",
            image: gallery3,
        },
        {
            id: 4,
            header: "Оркестар",
            image: gallery4,
        },
        {
            id: 5,
            header: "Бану у част",
            image: gallery5,
        },
        {
            id: 6,
            header: "Дјеца Бану",
            image: gallery6,
        },
                {
            id: 7,
            header: "Концерт",
            image: gallery1,
        },
        {
            id: 8,
            header: "Путовање",
            image: gallery2,
        },
        {
            id: 9,
            header: "Проба",
            image: gallery3,
        },
        {
            id: 10,
            header: "Оркестар",
            image: gallery4,
        },
        {
            id: 11,
            header: "Бану у част",
            image: gallery5,
        },
        {
            id: 12,
            header: "Дјеца Бану",
            image: gallery6,
        },

    ];

    const handleClick = (id) => {
        navigate(`/galerija/${id}`);
    };

    return (

            <div className="gallery_main">
                <ParallaxText heading='ГАЛЕРИЈА'/>
                {/* <Heading heading="ГАЛЕРИЈА" headingbackground="ГАЛЕРИЈА" /> */}
                <div className="gallery_page">
                    {galleries.map((gallery) => (
                        <GalleryCard
                            key={gallery.id}
                            header={gallery.header}
                            image={gallery.image}
                            handleClick={() => handleClick(gallery.id)} />
                    ))}
                </div>
            </div>
    )
}

export default Gallery;
