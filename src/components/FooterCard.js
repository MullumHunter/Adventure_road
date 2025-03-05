import styles from './styles/FooterCard.module.css'

function FooterCard({attributes}) {
    console.log(attributes.addition)
    const roman = {
        1: "I",
        2: "II",
        3: "III"
    }
    return (
        <div className={styles.FooterCard}>
            <div>ACT {roman[attributes.act] || attributes.act}</div>
            <div className={styles.Author}>
                <img className={styles.AuthorImg} src='/img/footer/brush3.png' alt="artist"/>
                {attributes.author}
            </div>
            <div className={styles.CardNumber}>
                <img className={styles.CardNumberImg} src={attributes.addition.img} alt="sheet"/>
                {attributes.cardNumber}
            </div>
            <div>&#169; {attributes.year} BWG</div>
        </div>
    )
}

export default FooterCard;
