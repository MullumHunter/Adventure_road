import styles from "./styleTable/Button.module.css"
function Button({text}) {
    return(
        <button className={styles.Button}>Выбрать библиотеку</button>
    )
}

export default Button;
