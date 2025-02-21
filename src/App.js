import './App.css';
import Library from "./components/Library";
import {useState} from "react";

function App() {
    const library = [
        {
            id: 0,
            name: "Первая",
            items: 1
        },
    ]
    const [lib, setLib] = useState(library)
    const changeLib = () => {
        const newCard = {id: lib.length, name: `Библиотека ${lib.length + 1}`, items: 1};
        setLib([...lib, newCard]);
    }
    console.log(lib)
    return(
        <div className="App">
            <Library itemsLibrary={lib}/>
            <button onClick={changeLib}>Add</button>
        </div>
    )
}

export default App;
