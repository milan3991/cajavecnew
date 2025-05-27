import { useParams } from "react-router-dom";
import GalleryRender from "../../../components/GalleryRender/GalleryRender";
import NotFound from "../../NotFound/NotFount";

const idToGalleryKey = {
    1: "concert",
    2: "travel",
    3: "rehearsals",
    4: "orchestra",
    5: "banuucast",
    6: "djecabanu",
    7: "concert",
    8: "travel",
    9: "rehearsals",
    10: "orchestra",
    11: "banuucast",
    12: "djecabanu"

};

const allGalleries = {
    concert: import.meta.glob('../../../assets/Concert/*.jpg', { eager: true }),
    travel: import.meta.glob('../../../assets/Travel/*.jpg', { eager: true }),
    rehearsals: import.meta.glob('../../../assets/rehearsals/*.jpg', { eager: true }),
    orchestra: import.meta.glob('../../../assets/orchestra/*.jpg', { eager: true }),
    banuucast: import.meta.glob('../../../assets/banuucast/*.jpg', { eager: true }),
    djecabanu: import.meta.glob('../../../assets/djecabanu/*.jpg', { eager: true }),
};

const GalleryDetail = () => {
    const { id } = useParams();
    const galleryKey = idToGalleryKey[id];
    const rawImages = galleryKey ? allGalleries[galleryKey] : null;

    const images = rawImages
        ? Object.values(rawImages).map((img) => ({
              original: img.default,
              thumbnail: img.default,
          }))
        : [];

    const isNotFound = !galleryKey || !rawImages || images.length === 0;

    return (
        <div className="gallery_detail">
            {isNotFound ? (
                <NotFound />
            ) : (
                <GalleryRender images={images} />
            )}
        </div>
    );
};

export default GalleryDetail;
