import styles from './ImageGallaryItem.module.css';

const ImageGallaryItem = ({ webformatURL, onImgClick }) => {
  return (
    <li className={styles.imageGalleryItem}>
      <img
        src={webformatURL}
        alt="img"
        className={styles.imageGalleryItemImage}
        onClick={onImgClick}
      />
    </li>
  );
};

export default ImageGallaryItem;
