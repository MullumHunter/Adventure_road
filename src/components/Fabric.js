import style from "./styles/Fabric.module.css"
function Fabric({children}) {
    return (
        <div className={style.Fabric} style={{ backgroundImage: "url('/img/chain/fabricMax5.png')" }}>
            {children}
        </div>
    );
}
export default Fabric;
