import styles from './/styles/Card.module.css'
function Card(props) {
    const{ imgCard, nameCard, skils} = props
    return (
        <div className={styles.Card}  style={{ backgroundImage: `url(${imgCard})`}}>
            
           
                
                {/*{Array.from({length: skils.length}).map((_, index) => (*/}
                {/*    <div>skill</div>*/}
                {/*))}*/}
                <h2>{nameCard}</h2>
          
        </div>
    )
}
export default Card;
