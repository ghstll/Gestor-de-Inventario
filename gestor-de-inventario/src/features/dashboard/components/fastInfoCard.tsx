interface props{
    title : string
    value : string
    percent : number
    iconsvg : string
    description ?: string
    positive : boolean
}

export default function FastInfoCard({title,value,percent,iconsvg,description,positive} : props) {
    const svgArrow = (
        <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transform : positive ? "rotate(180deg)" : "rotate(0deg)"}}>
                                <path d="M17.9188 8.17969H11.6888H6.07877C5.11877 8.17969 4.63877 9.33969 5.31877 10.0197L10.4988 15.1997C11.3288 16.0297 12.6788 16.0297 13.5088 15.1997L15.4788 13.2297L18.6888 10.0197C19.3588 9.33969 18.8788 8.17969 17.9188 8.17969Z" fill={positive ? "#1ca600" : "#a30000"}
/>
                                </svg>
    )
    return (
        <article className="bg-[#1a1b22] rounded-md p-2 text-white w-full min-h-[150px] flex flex-col gap-5 hover:brightness-125 duration-700 ">
            <div className="flex items-center gap-5">
                <div className="border border-gray-600 w-fit rounded-full p-2">
                    <img src={iconsvg} alt="" />
                </div>
                <h1 className="font-medium text-xl">{title}</h1>
            </div>
            <div>
                <div className="flex justify-between ps-4 pe-4">
                    <h1 className="font-extrabold text-2xl">{value}</h1>
                    <div className={`${positive ? "bg-green-300 text-green-800" : "bg-red-400 text-red-800"} p-1 pe-3 ps-3 font-medium text-xl rounded-xl flex items-center`}>
                        <h1>{positive ? "+" : "-"}{percent}%</h1>
                        {svgArrow}
                    </div>
                </div>
                <h1 className="ml-4 font-thin text-xl">{description}</h1>
            </div>
        </article>
    )
}