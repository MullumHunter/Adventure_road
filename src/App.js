import './App.css';
import Library from "./components/Library";
import {useState} from "react";

import {listData} from "./components/data/ListData";
import AggregatorCard from "./table/AggregatorCard";
import TableLibrary from "./table/TableLibrary";
import FilterTypeCards from "./table/FilterTypeCards";
import {dataTypeCards} from "./components/data/cards/DataTypeCards";


function App() {
    
    const [inputText, setInputText] = useState("")
    const [cardList, setCardList] = useState(listData)
    
    return (
        <div className="App">
            {/*<Library itemsLibrary={cardList} />*/}
            {/*<AggregatorCard/>*/}
            {/*<TableLibrary/>*/}
            <FilterTypeCards typeCards={dataTypeCards}/>
        </div>
    );
}

export default App;
