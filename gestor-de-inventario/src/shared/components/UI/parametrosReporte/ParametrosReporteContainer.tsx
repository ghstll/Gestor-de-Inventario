interface props {
    children : React.ReactNode
}
export default function ParametrosReporteContainer({children } : props ){
    return(
        <section  className="border border-black h-full bg-white  justify-center flex flex-col items-center p-3 rounded-md gap-5 w-full" >
           {children}
        </section>
    )
}