import CardList from "./CardList";
function Library() {
    const cardLists = [1,2,3,4]
    return(
        cardLists.map((list) => <CardList />)
    )
}
export default Library;
