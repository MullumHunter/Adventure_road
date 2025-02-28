import style from './styles/Way.module.css'
function Way({title, attributes, className }) {
    return(
        <div  className={`${style.Way} ${className}`} style={{ backgroundImage: `url(/img/chain/paperWay3.png)`}}>
            <p>{title}</p>
        </div>
    )
}

export default Way;
