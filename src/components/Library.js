import CardList from "./CardList";

function Library({ itemsLibrary }) {
    return (
        <>
            {itemsLibrary.map((lib) => (
                <CardList
                    key={lib.id}
                    nameLib={lib.name}
                    skills={lib.skills}
                />
            ))}
        </>
    );
}

export default Library;
