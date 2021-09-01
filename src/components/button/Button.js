import styles from './Button.module.css';

const Button = ({ onClick, text }) => {
  return (
    <div className={styles.buttonWraper}>
      <button className={styles.button} type="button" onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
