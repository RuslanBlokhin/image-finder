import ImageGallaryItem from './imageGallaryItem/ImageGallaryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ showGallery, onImgClick }) => {
  return (
    <ul className={styles.imageGallery}>
      {showGallery.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGallaryItem
          key={`${id}`}
          webformatURL={webformatURL}
          onImgClick={() => onImgClick(largeImageURL)}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
