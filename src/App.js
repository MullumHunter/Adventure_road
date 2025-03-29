import './App.css';
import Library from "./components/Library";
import {useState} from "react";

import {listData} from "./components/data/ListData";
import AggregatorCard from "./table/AggregatorCard";

function App() {
    
    const [inputText, setInputText] = useState("")
    const [cardList, setCardList] = useState(listData)
    
    return (
        <div className="App">
            {/*<Library itemsLibrary={cardList} />*/}
            <AggregatorCard/>
        </div>
    );
}

export default App;
