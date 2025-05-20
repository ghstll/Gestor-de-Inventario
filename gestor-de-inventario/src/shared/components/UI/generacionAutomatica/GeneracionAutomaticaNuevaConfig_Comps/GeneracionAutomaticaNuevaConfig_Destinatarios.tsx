import { useEffect, useRef, useState } from "react";

interface props{
    setDestinatarios : React.Dispatch<React.SetStateAction<string[]>>;
    loadDestinatarios : string[]

}


export default function GeneracionAutomaticaNuevaConfig_Destinatarios({...props} : props) {
    const [destinatarios, setDestinatariosLocal] = useState<string[]>([])

    const deleteDestinatario = (itemIndex: string) => {
        setDestinatariosLocal((prev) => prev.filter((_,index) =>  index !== parseInt(itemIndex)))
    }


    const validarEmail = (email : string) =>{
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email)
    }

    const inputCorreoRef = useRef<HTMLInputElement>(null)

    const loadData = () =>{ //En caso de que abrieramos una card de una conf ya existente, su informacion se descargaria aqui
        if(props.loadDestinatarios.length > 0){// Verifica que las props tengan informacion
            setDestinatariosLocal(props.loadDestinatarios)
        }   
    }
 
    useEffect(() => {
            loadData();
    }, [
        props.loadDestinatarios
    ]);


    useEffect(()=>{
        props.setDestinatarios(destinatarios)
    }, [destinatarios ])

    return (    
        <article className="flex flex-col gap-3">
            <div className="flex gap-4 items-center">
                <h1 className="font-semibold">Agregar destinatarios : </h1>
                <input type="email" placeholder="Correo del destinatario" className="border border-white rounded-md p-1 placeholder:italic bg-transparent" ref={inputCorreoRef} onKeyDown={(e)=>{
                    if(e.key === "Enter"){
                        e.preventDefault()
                        const input = e.target as HTMLInputElement
                        if(input.value !== "" && validarEmail(input.value)){
                            setDestinatariosLocal([...destinatarios, input.value])
                            input.value = ""
                        }else{
                            alert("Por favor ingresa un correo valido.")
                        }
                    }
                }} />
                <button className="p-1 border border-white rounded-md font-medium" type="button"
                    onClick={() =>{
                        const input = inputCorreoRef.current
                        if(input && input.value !== ""){
                            if(validarEmail(input.value)){
                                setDestinatariosLocal([...destinatarios, input.value])
                                input.value = ""
                            }else{
                                alert("Por favor ingresa un correo valido.")
                            }
                        }else{
                            alert("Porfavor ingresa un correo")
                        }
                    }}
                >Agregar</button>
            
            </div>
            <div className="flex flex-col gap-4 ml-5 max-h-[150px] overflow-y-auto scrollbarclass border-white border rounded-md p-2 bg-black">
                <h1 className="italic">Da click sobre los correos para eliminarlos</h1>
                {destinatarios.map((destinatario : string,index : number) => {
                    return(
                        <div className="border border-white p-2 cursor-pointer rounded-md hover:bg-[#a23b3b] hover:text-white duration-300" id={index.toString()} key={index} onClick={(e) => deleteDestinatario(e.currentTarget.id)}>
                            <h1 className="font-medium">{destinatario}</h1>
                        </div>
                    )
                })}
            </div>
        </article>
    )
}