import sections from "../Works/components/WorksItem"
import Heading from "../../components/Heading/Heading";
import { useParams, Navigate } from 'react-router-dom';
import GalleryRender from "../../components/GalleryRender/GalleryRender";
import '../Gallery/gallery.style.css'

const SectionById = () => {
    const { id } = useParams();
    const section = sections.find(section => section.id == id);
    if (!section) {
        return <Navigate to="*" />;
      }

    return (
        <div>
            <Heading heading={section.header} headingbackground={section.headingbackground} />
            <div className="gallery_wrapper">
            <GalleryRender images={section.images} />            
            <p>{section.text}</p>
            </div>
        </div>
        )
};

export default SectionById;
