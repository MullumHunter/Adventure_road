import './App.css';
import Library from "./components/Library";

function App() {
    const library = [
        {
            id: 0,
            name: "Первая",
            items: 1,
            skills: [
                {
                    run: 4,
                    skale: 2
                },
                {
                    flau: 2,
                    skale: 3
                }
            ]
        },
        {
            id: 1,
            name: "Вторая",
            items: 1,
            skills: [
                {
                    run: 8,
                    skale: 2
                },
                {
                    flau: 9,
                    skale: 3
                }
            ]
        },
    ];
    
    return (
        <div className="App">
            <Library itemsLibrary={library} />
        </div>
    );
}

export default App;
