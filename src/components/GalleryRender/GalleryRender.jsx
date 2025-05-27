import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


// class MyGallery extends React.Component {
//   render() {
//     return <ImageGallery items={images} />;
//   }
// }

// export default MyGallery;

// Komponenta za galeriju koja prima slike kao props
const GalleryRender = ({ images }) => {
  return <ImageGallery items={images} />;
};

export default GalleryRender;