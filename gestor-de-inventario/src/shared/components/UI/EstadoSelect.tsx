interface Estados{
    value : string;
    text : string;
}

interface props{
    estados : Estados[]
}


export default function EstadoSelect({estados} : props) {

    return (
        <div className="flex gap-5 items-center text-white">
            <h1 className="font-semibold">Estado</h1>
            <select name="estado_recepciones_select" id="estado_recepciones_select"  className="bg-[#3e4051] rounded-md w-full">
                {
                    estados.map((estado) => {
                        return(
                            <option value={estado.value}>{estado.text}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}