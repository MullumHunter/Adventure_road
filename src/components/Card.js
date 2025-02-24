import styles from "./styles/Card.module.css";
import stilSkills from './styles/Skills.module.css'
import Skill from "./Skill";

function Card({ nameCard, img, skills, title }) {
    console.log({skills})
    return (
        
        <div className={styles.Card} style={{ backgroundImage: `url(${img})`}}>
            <div className={stilSkills.Skills}>
                {skills.map((skill, index) =>
                    <Skill img={skill.img}/>
                ) }
            </div>
            <div>
                <h2>{nameCard}</h2>
                <p>{title}</p>
            </div>
        </div>
    );
}

export default Card;
