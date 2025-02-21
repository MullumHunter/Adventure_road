import './App.css';
import Library from "./components/Library";
import {cardsData} from './components/CardData'
import {useState} from "react";
import Input from "./components/Input";

function App() {
    const [ cards, setCards ] = useState(cardsData)
    const [ lib, setLib] = useState(cardsData)
    const [inputText, setInputText] = useState("")
    const addLib = () => {
        const newCatalog = {
            id: lib.length,
            name: `Новый каталог ${lib.length + 1}`,
            items: 0,
            skills: []
        }
        setLib([...lib, newCatalog])
    }
    
    const handlerInputChanger = (newText) => {
        setInputText(newText);
    }
    console.log(inputText)
    return (
        <div className="App">
            <Library itemsLibrary={lib} />
            <button onClick={addLib}>add</button>
            <Input value={inputText} onChage={handlerInputChanger}/>
        </div>
    );
}

export default App;
