import Loader from 'react-loader-spinner';
import styles from './Loader.module.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const LoaderComp = () => {
  return (
    <Loader
      type="TailSpin"
      color="#00BFFF"
      height={50}
      width={50}
      timeout={3000}
      className={styles.loader}
    />
  );
};

export default LoaderComp;
