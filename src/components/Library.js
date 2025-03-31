import CardList from "./CardList";

function Library({ itemsLibrary }) {
    return (
        <>
            {Object.entries(itemsLibrary).map(([libraryName, acts]) => (
                <div key={libraryName}>
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
