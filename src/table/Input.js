import styles from "./styleTable/Input.module.css";

function Input() {
    return (
        <input className={styles.Input} type="text" placeholder="Введить название библеотеки" maxLength="35"/>
    )
}
export default Input;
