import styles from "../table/styleTable/TableLibrary.module.css";
import Pop_up_menu from "./Pop_up_menu";
import { aggregatorCard } from "../components/data/cards/AggregatorCard";
import Library from "../components/Library";
import { useState } from "react";
import {dataTypeCards} from "../components/data/cards/DataTypeCards";
import FilterTypeCards from "./FilterTypeCards";

function TableLibrary() {
    const [selectedLibraries, setSelectedLibraries] = useState([]);
    
    const handleLibrarySelect = (selectedLibraries) => {
        console.log("Выбранные библиотеки:", selectedLibraries);
        setSelectedLibraries(selectedLibraries);
    };
    
    const filteredCards = Object.entries(aggregatorCard)
        .filter(([name]) => selectedLibraries.includes(name))
        .reduce((acc, [key, value]) => {
            acc[key] = value;
            return acc;
        }, {});
    
    return (
            <div className={styles.TableLibrary}>
                <div className={styles.Library}>
                    <Pop_up_menu list={aggregatorCard} onLibrarySelect={handleLibrarySelect}/>
                </div>
                <>
                <div className={styles.Cards}>
                    <FilterTypeCards typeCards={dataTypeCards}/>
                    <Library itemsLibrary={filteredCards}/>
                </div>
                </>
            </div>
    );
}

export default TableLibrary;
