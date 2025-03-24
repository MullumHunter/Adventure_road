import style from "./styles/Fabric.module.css"
function Fabric({children , style: customStyle}) {
    return (
        <div className={style.Fabric} style={{ backgroundImage: "url('/img/chain/fabricMax5.png')" , ...customStyle, }}>
            {children}
        </div>
    );
}
export default Fabric;
