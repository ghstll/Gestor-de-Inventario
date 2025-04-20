import React from "react"

function FormParamsReportContainer({TitleContainer,children} : {TitleContainer : string,children : React.ReactNode}){
    return(
        <form action="" className="border border-gray-700 h-fit  justify-center flex flex-col items-center p-3 rounded-2xl gap-10 w-[70%]       " >
            <h1 className="font-bold italic text-xl">{TitleContainer}</h1>
            <div className="flex flex-col gap-8">
                {children}
            </div>
        </form>
    )
}

export default FormParamsReportContainer
