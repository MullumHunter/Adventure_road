import styles from './styles/Hard.module.css'
function Hard({hard}) {
    return <img className={styles.Hard} src={hard.img} alt="hard"/>
}
export default Hard;
