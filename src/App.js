import './App.css';
import Library from "./components/Library";
import img from "./components/img/Card.jpg"
function App() {
    const library = [
        {
        id: 0,
        name: "Первая",
        items: 1,
        img: img,
        },
        {
            id: 1,
            name: "Вторая",
            items: 2,
            img: img,
        },
    ]

    return(
        <div className="App">
            <Library itemsLibrary={library}/>
        </div>
    )
}

export default App;
