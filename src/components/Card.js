import styles from "./styles/Card.module.css";
import Skill from "./Skill";
import skill from "./Skill";

function Card({ nameCard, img, skills, title }) {
    console.log({skills})
    return (
        
        <div className={styles.Card} style={{ backgroundImage: `url(${img})`}}>
            <div>
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
