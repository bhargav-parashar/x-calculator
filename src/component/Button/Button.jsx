import styles from "./Button.module.css";
const Button = ({ label, handleClick }) => {
  return <button className={styles.wrapper} onClick={handleClick} value={label}>  {label} </button>;
};
export default Button;
