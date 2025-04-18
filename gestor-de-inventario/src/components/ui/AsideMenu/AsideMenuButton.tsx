
export default function AsideMenuButton({text,icon,onClickFunc} : {text : string,icon : string,onClickFunc?: ()=>void}){
    return(
        <button onClick={onClickFunc} className="w-[100%]  rounded-lg flex ml-1 gap-5 p-1 px-3 hover:bg-[#1a6147] duration-300">
            <img src={icon} alt="icon"></img>
            <h3 className="font-semibold text-white text-xs">
                {text}
            </h3>
        </button>
    )   
}