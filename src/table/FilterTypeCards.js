function FilterTypeCards({typeCards}) {
    console.log(typeCards)
    return(
        <select>
            {typeCards.map((item, index)=>(
                <option key={index} value={item}>
                    {item}
                </option>
                )
            )}
        </select>
    )
}
export default FilterTypeCards;
