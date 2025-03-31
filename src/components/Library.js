import CardList from "./CardList";
import styles from "./styles/Library.module.css"
function Library({ itemsLibrary }) {
    return (
        <>
            {Object.entries(itemsLibrary).map(([libraryName, acts]) => (
                <div key={libraryName}>
                    <h1 className={styles.h1}>{libraryName}</h1>
                    {Object.entries(acts).map(([actNumber, actData]) => (
                        <div key={actNumber}>
                            {Object.entries(actData).map(([type, cards]) => (
                                <CardList
                                    key={`${libraryName}-${actNumber}-${type}`}
                                    nameLibrary={libraryName}
                                    cards={cards}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </>
    );
}

export default Library;
