import CardList from "./CardList";

function Library({ itemsLibrary }) {
    return (
        <>
            {Object.entries(itemsLibrary).map(([libraryName, acts]) => (
                <div key={libraryName}>
                    <h2>{libraryName}</h2>
                    {Object.entries(acts).map(([actNumber, actData]) => (
                        <div key={actNumber}>
                            <h3>Акт {actNumber}</h3>
                            {Object.entries(actData).map(([type, cards]) => (
                                <CardList
                                    key={`${libraryName}-${actNumber}-${type}`}
                                    nameLibrary={`${libraryName} - Акт ${actNumber} - ${type}`}
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
