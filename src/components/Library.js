import CardList from "./CardList";
function Library({lists}) {
    
    return(
        lists.map((list) => <CardList />)
    )
}
export default Library;
