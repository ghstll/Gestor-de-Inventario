
export default function AsideMenuButton({text,icon,onClickFunc,notificationNumber} : {text : string,icon : string,onClickFunc?: ()=>void , notificationNumber ? :  number} ){
    return(
        <button onClick={onClickFunc} className="w-[100%]  rounded-lg flex ml-1 gap-5 p-1 px-3 hover:bg-[#1a6147] duration-300 items-center">
            <div className="relative">
                <img src={icon} alt="icon" width={21} height={21}></img>
                {notificationNumber && notificationNumber > 0 &&(
                    <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font bold rounded-full px-1.5 py-0.5">{notificationNumber}</span>
                )}
            </div>
            <h3 className="font-semibold text-white text-xs">
                {text}
            </h3>
        </button>
    )   
}