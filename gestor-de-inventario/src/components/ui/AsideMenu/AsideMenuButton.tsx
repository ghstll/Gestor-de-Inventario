
export default function AsideMenuButton({text,icon} : {text : string,icon : string}){
    return(
        <button className="w-[100%]  rounded-lg flex ml-1 gap-5 p-1 px-3 hover:bg-[#1a6147] duration-300">
            <img src={icon} alt="icon"></img>
            <h3 className="font-semibold text-white">
                {text}
            </h3>
        </button>
    )   
}