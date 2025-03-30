import './App.css';
import Library from "./components/Library";
import {useState} from "react";

import {listData} from "./components/data/ListData";
import AggregatorCard from "./table/AggregatorCard";
import TableLibrary from "./table/TableLibrary";

function App() {
    
    const [inputText, setInputText] = useState("")
    const [cardList, setCardList] = useState(listData)
    
    return (
        <div className="App">
            {/*<Library itemsLibrary={cardList} />*/}
            {/*<AggregatorCard/>*/}
            <TableLibrary/>
        </div>
    );
}

export default App;
