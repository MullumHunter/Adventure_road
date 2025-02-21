import './App.css';
import Library from "./components/Library";

function App() {
    const library = [
        {
        id: 0,
        name: "Первая",
        items: 1
        },
        {
            id: 1,
            name: "Вторая",
            items: 2
        },
    ]

    return(
        <div className="App">
            <Library itemsLibrary={library}/>
        </div>
    )
}

export default App;
