import './App.css';
import Library from "./components/Library";

function App() {
    const cardLists = [1,2]
    return(
        <div className="App">
            <Library lists={cardLists}/>
        </div>
    )
}

export default App;
