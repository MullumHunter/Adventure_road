import './App.css';
import Library from "./components/Library";

function App() {
    const libriry = [
        {
        id: 0,
        name: "Первая",
        items: 4
        },
        {
            id: 1,
            name: "Вторая",
            items: 2
        },
        {
            id: 2,
            name: "Третья",
            items: 1
        },
        {
            id: 3,
            name: "Четвертая",
            items: 4
        },
    ]
    console.log(libriry)
    return(
        <div className="App">
            <Library itemsLibriry={libriry}/>
        </div>
    )
}

export default App;
