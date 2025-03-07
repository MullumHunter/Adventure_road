import styles from './styles/Name.module.css'
function Name({img}) {
    return <img className={styles.Name} src={img} alt="name magic"/>
}
export default Name;
