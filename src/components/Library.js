import CardList from "./CardList";
function Library({itemsLibriry}) {
    console.log(itemsLibriry)
    return (
        itemsLibriry.map((lib) => (
            <CardList cards={lib.items} name={lib.name}/>
        ))
    )
}
export default Library;
