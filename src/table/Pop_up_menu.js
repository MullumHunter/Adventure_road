import styles from "../table/styleTable/Pop_up_menu.module.css"
function Pop_up_menu({list}) {
    
    return(
        <div>
            <h3>Названия библиотек:</h3>
            {Object.keys(list).map((name, index) => (
                <div className={styles.Item} key={index}>
                    {name}
                </div>
            ))}
        </div>
    )
}

export default Pop_up_menu;
