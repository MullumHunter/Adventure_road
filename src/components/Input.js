function Input({value, onChage}) {
    return (
       <input
           type="text"
           value={value}
           onChange={(e) => onChage(e.target.value)}/>
    )
}
export default Input;
