import './App.css';
import Library from "./components/Library";
import {useState} from "react";
// import Input from "./components/Input";
// import ListData from './components/data/ListData'
import {listData} from "./components/data/ListData";
import {trialsCard_ACT_1_Original} from "./components/data/cards/trialsCard_ACT_1_Original";

function App() {
    
    const [inputText, setInputText] = useState("")
    const [cardList, setCardList] = useState(listData)
    
    const addLib = () => {
        const newCatalog = {
            // id: cardList.length,
            // name: {inputText},
            // items: 0,
            // skills: []
        }
        // setCardList([...cardList, newCatalog])
    }
    const handlerInputChanger = (newText) => {
        // setInputText(newText);
    }
    return (
        <div className="App">
            <Library itemsLibrary={cardList} />
            {/*<button onClick={addLib}>add</button>*/}
            {/*<Input value={inputText} onChange={handlerInputChanger}/>*/}
        </div>
    );
    
}

export default App;
