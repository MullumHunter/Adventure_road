import CardList from "./CardList";
function Library({itemsLibrary}) {
    return (
        itemsLibrary.map((lib) => (
            <CardList cards={lib.items} name={lib.name} imgCard={lib.img}/>
        ))
    )
}
export default Library;
