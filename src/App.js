import './App.css';
import Library from "./components/Library";

function App() {
    const libraries  = [
        { id: 1, name: "Библиотека 1", cards: ["Карточка 1", "Карточка 2"] },
        { id: 2, name: "Библиотека 2", cards: ["Карточка 3", "Карточка 4", "Карточка 5"] },
        { id: 3, name: "Библиотека 1", cards: ["Карточка 1", "Карточка 2"] },
        { id: 4, name: "Библиотека 2", cards: ["Карточка 3", "Карточка 4", "Карточка 5", "Карточка 6"] }
    ]
    return(
        <div className="App">
            <h1>Всего библеотек: {libraries.length }</h1>
            {
                libraries.map((lib) => ( <Library key ={lib.id} cards={lib.cards}/> )
                )}
        </div>
    )
}

export default App;
