export default function GeneracionAutomaticaBtn({title,description,icon , onClickFunc} : {title : string , description : string , icon : string , onClickFunc : () => void}){
    return(
        <div  className="flex justify-between items-center border border-black w-[80%] h-fit rounded-lg p-5 cursor-pointer hover:bg-gray-100 duration-700 " onClick={ onClickFunc} >
            <div>
                <h1 className="font-semibold">{title}</h1>
                <div className="font-thin italic">
                    {description}
                </div>
            </div>
            <div>
                <img src={icon} alt="" />
            </div>
        </div>
    )
}