import './App.css';
import Library from "./components/Library";
import {cardsData} from './components/CardData'
import {useState} from "react";

function App() {
    const [ cards, setCards ] = useState(cardsData)
    const [ lib, setLib] = useState(cardsData)
    console.log(lib.length)
    const addLib = () => {
        const newCatalog = {
            id: lib.length,
            name: `Новый каталог ${lib.length + 1}`,
            items: 0,
            skills: []
        }
        setLib([...lib, newCatalog])
    }
    return (
        <div className="App">
            <Library itemsLibrary={lib} />
            <button onClick={addLib}>add</button>
        </div>
    );
}

export default App;
