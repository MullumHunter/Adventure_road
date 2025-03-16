import CardList from "./CardList";

function Library({ itemsLibrary }) {
    return (
        <>
            {itemsLibrary.map((lib) => (
                <CardList
                    key={lib.id}
                    id={lib.id}
                    nameLibrary={lib.nameLibrary}
                    cards={lib.cards}
                />
            ))}
        </>
    );
}
export default Library;
