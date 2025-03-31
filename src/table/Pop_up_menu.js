import styles from "../table/styleTable/Pop_up_menu.module.css";
import { useState, useEffect } from "react";

function Pop_up_menu({ list, style, onLibrarySelect  }) {
    
    const [selectedLibraries, setSelectedLibraries ] = useState(() => {
        return JSON.parse(localStorage.getItem("selectedLibraries")) || [];
    });
    
    useEffect(() => {
        localStorage.setItem("selectedLibraries", JSON.stringify(selectedLibraries))
        onLibrarySelect?.(selectedLibraries);
    }, [selectedLibraries, onLibrarySelect]);
    
    const toggleSelect = (library) => {
        setSelectedLibraries((prevSelected) =>
            prevSelected.includes(library)
                ? prevSelected.filter((item) => item !== library)
                : [...prevSelected, library]
        );
    };
    
    return (
        <div>
            <div className={styles.Container} style={style}>
                {Object.keys(list).map((name) => (
                    <div
                        className={`${styles.Item} ${selectedLibraries.includes(name) ? styles.selected : ""}`}
                        key={name}
                        onClick={() => toggleSelect(name)}
                    >
                        {name}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Pop_up_menu;
