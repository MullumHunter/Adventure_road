import styles from "./styleTable/Button.module.css"
function Button({text, onClick}) {
    return(
        <button className={styles.Button} onClick={onClick}>Выбрать библиотеку</button>
    )
}

export default Button;
