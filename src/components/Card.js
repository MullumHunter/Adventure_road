import styles from "./styles/Card.module.css";
import stylSkills from './styles/Skills.module.css'
import Skill from "./Skill";

function Card({id, nameCard, hard, img, ways, requirement,act,author,addition,cardNumber,year }) {
    return (
        <div className={styles.Card} style={{ backgroundImage: `url(${img})`}}>
            <div className={stylSkills.Skills}>
                {requirement.map((requirement, index) =>
                    <Skill key={index} img={requirement.img}/>
                ) }
            </div>
            <div>
                <h2>{nameCard}</h2>
            </div>
        </div>
    );
}

export default Card;
