import React, { useState } from 'react';
import styles from '../table/styleTable/FilterTypeCards.module.css';

function FilterTypeCards({ typeCards }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    
    const handleSelect = (key) => {
        setSelectedOption(typeCards[key]);
        setIsOpen(false);
    };
    
    return (
        <div className={styles.SelectWrapper}>
            <button className={styles.SelectButton} onClick={() => setIsOpen(!isOpen)}>
                {selectedOption || 'Выберите тип карт'}
            </button>
            {isOpen && (
                <ul className={styles.OptionsList}>
                    {Object.entries(typeCards).map(([key, value], index) => (
                        <li key={index} className={styles.OptionItem} onClick={() => handleSelect(key)}>
                            {value}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default FilterTypeCards;
