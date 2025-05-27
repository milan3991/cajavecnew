import image1 from '../../assets/galery1.jpg';
import image2 from '../../assets/galery2.jpg';
import image3 from '../../assets/galery3.jpg';
import image4 from '../../assets/galery4.jpg';
import image5 from '../../assets/galery5.jpg';
import image6 from '../../assets/galery6.jpg';
import image7 from '../../assets/galery7.jpg';
import image8 from '../../assets/galery8.jpg';
import image9 from '../../assets/galery9.jpg';
import image10 from '../../assets/galery10.jpg';
import image11 from '../../assets/galery11.jpg';
import image12 from '../../assets/galery12.jpg';
import image13 from '../../assets/galery13.jpg';
import image14 from '../../assets/galery14.jpg';
import image15 from '../../assets/galery15.jpg';
import image16 from '../../assets/galery16.jpg';
import image17 from '../../assets/galery17.jpg';
import image18 from '../../assets/galery18.jpg';
import GalleryRender from "../../components/GalleryRender/GalleryRender";
import './gallery.style.css'


const images = [
    {
      original: image1,
      thumbnail: image1,
    },
    {
      original: image2,
      thumbnail: image2,
    },
    {
      original: image3,
      thumbnail: image3,
    },
    {
        original: image4,
        thumbnail: image4,
      },
      {
        original: image5,
        thumbnail: image5,
      },
      {
        original: image6,
        thumbnail: image6,
      },
      {
        original: image7,
        thumbnail: image7,
      },
      {
        original: image8,
        thumbnail: image8,
      },
      {
        original: image9,
        thumbnail: image9,
      },
      {
        original: image10,
        thumbnail: image10,
      },
      {
        original: image11,
        thumbnail: image11,
      },
      {
        original: image12,
        thumbnail: image12,
      },
      {
        original: image13,
        thumbnail: image13,
      },
      {
        original: image14,
        thumbnail: image14,
      },
      {
        original: image15,
        thumbnail: image15,
      },
      {
        original: image16,
        thumbnail: image16,
      },
      {
        original: image17,
        thumbnail: image17,
      },
      {
        original: image18,
        thumbnail: image18,
      },
  ];


const Gallery = () => {
  return (
    <div className='gallery_wrapper'>
        <GalleryRender images={images}/>
    </div>
  )
}

export default Gallery;