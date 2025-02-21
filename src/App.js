import './App.css';
import Library from "./components/Library";
import {library} from './components/CardData'

function App() {
    return (
        <div className="App">
            <Library itemsLibrary={library} />
        </div>
    );
}

export default App;
