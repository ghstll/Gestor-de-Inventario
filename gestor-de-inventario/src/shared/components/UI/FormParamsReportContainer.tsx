import React from "react"

function FormParamsReportContainer({TitleContainer,children} : {TitleContainer : string,children : React.ReactNode}){
    return(
        <form action="" className="border border-white h-fit   justify-center flex flex-col items-center p-3 rounded-md gap-5 w-full bg-[#181818]" >
            <h1 className="font-bold italic text-xl text-white">{TitleContainer}</h1>
            <div className="flex flex-col gap-3">
                {children}
            </div>
        </form>
    )
}

export default FormParamsReportContainer
