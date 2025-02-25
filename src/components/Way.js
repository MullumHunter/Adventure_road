import style from './styles/Way.module.css'
function Way({title, attributes}) {
    return(
        <div className={style.Way}>
            <p>{title}</p>
        </div>
    )
    
}

export default Way;
