import styles from './styles/Rune.module.css'
function Rune({className}) {
    return <img className={`${styles.Rune} ${className}`} src="/img/runes/intellect.png" alt="intellect"/>
}
export default Rune;
