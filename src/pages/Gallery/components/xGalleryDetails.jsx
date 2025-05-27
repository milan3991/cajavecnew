import { useParams } from 'react-router-dom';
import gallery1 from '../../../assets/Concert/gallery1.jpg';
import gallery2 from '../../../assets/Concert/gallery2.jpg';
import gallery3 from '../../../assets/Concert/gallery3.jpg';
import gallery4 from '../../../assets/Concert/gallery4.jpg';
import gallery5 from '../../../assets/Travel/gallery1.jpg';
import gallery6 from '../../../assets/Travel/gallery2.jpg';
import gallery7 from '../../../assets/Travel/gallery3.jpg';
import gallery8 from '../../../assets/Travel/gallery4.jpg';
import gallery9 from '../../../assets/galery9.jpg';
import gallery10 from '../../../assets/galery10.jpg';
import gallery11 from '../../../assets/galery11.jpg';
import gallery12 from '../../../assets/galery12.jpg';
import gallery13 from '../../../assets/galery13.jpg';
import gallery14 from '../../../assets/galery14.jpg';
import gallery15 from '../../../assets/galery15.jpg';
import gallery16 from '../../../assets/galery16.jpg';
import gallery17 from '../../../assets/galery17.jpg';
import gallery18 from '../../../assets/galery18.jpg';
import gallery19 from '../../../assets/galery19.jpg';
import gallery20 from '../../../assets/galery20.jpg';

import GalleryRender from '../../../components/GalleryRender/GalleryRender';

const galleries = {
    1: {
        images: [
            {
                original: gallery1,
                thumbnail: gallery1,
            },
            {
                original: gallery2,
                thumbnail: gallery2,
            },
            {
                original: gallery3,
                thumbnail: gallery3,
            },
            {
                original: gallery4,
                thumbnail: gallery4,
            },
        ],
    },
    2: {
        images: [
            {
                original: gallery5,
                thumbnail: gallery5,
            },
            {
                original: gallery6,
                thumbnail: gallery6,
            },
            {
                original: gallery7,
                thumbnail: gallery7,
            },
            {
                original: gallery8,
                thumbnail: gallery8,
            },
        ],
    },
    3: {
        images: [
            {
                original: gallery9,
                thumbnail: gallery9,
            },
            {
                original: gallery10,
                thumbnail: gallery10,
            },
            {
                original: gallery11,
                thumbnail: gallery11,
            },
            {
                original: gallery12,
                thumbnail: gallery12,
            },
        ],
    },
    4: {
        images: [
            {
                original: gallery13,
                thumbnail: gallery13,
            },
            {
                original: gallery14,
                thumbnail: gallery14,
            },
            {
                original: gallery15,
                thumbnail: gallery15,
            },
            {
                original: gallery16,
                thumbnail: gallery16,
            },
        ],
    },
    5: {
        images: [
           {
                original: gallery17,
                thumbnail: gallery17,
            },
            {
                original: gallery18,
                thumbnail: gallery18,
            },
            {
                original: gallery19,
                thumbnail: gallery19,
            },
            {
                original: gallery20,
                thumbnail: gallery20,
            },
        ],
    },
};

const GalleryDetail = () => {
    const { id } = useParams();
    const gallery = galleries[id];

    if (!gallery) {
        return <div>Галерија није пронађена.</div>;
    }

    return (
        <div className="gallery_detail">
            <GalleryRender images={gallery.images} />
        </div>
    );
};

export default GalleryDetail;