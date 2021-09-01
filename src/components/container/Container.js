import styles from './Container.module';

const Container = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
