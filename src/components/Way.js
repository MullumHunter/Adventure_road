import style from './styles/Way.module.css'
function Way({title, attributes, className }) {
    return(
        <div  className={`${style.Way} ${className}`}>
            <p>{title}</p>
        </div>
    )
}

export default Way;
