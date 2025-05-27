import Heading from "../../components/Heading/Heading";
import WorksItem from "./components/WorksData";
import './works.style.css'
import sections from "../Works/components/WorksItem"
import { useNavigate } from 'react-router-dom';
import ParallaxText from "../../components/ParallaxText/ParallaxText";

const Works = () => {

    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/section/${id}`);
    };

    return (
        <div className="works_wrapper">
            <ParallaxText heading='секције' />
            {/* <Heading heading="СЕКЦИЈЕ" headingbackground="СЕКЦИЈЕ" /> */}
            <div className="works_page">
                {sections.map((section) => (
                    <WorksItem
                        key={section.id}
                        header={section.header}
                        image={section.image}
                        handleClick={() => handleClick(section.id)} />
                ))}
            </div>
        </div>
    )
}

export default Works;
