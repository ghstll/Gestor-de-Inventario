import { useEffect } from "react";

interface ToastProps {
    message : string;
    duration ? : number
    onClose : () => void;
    tipo: "agregadosstage" | "provenviados" | "error_validacion"|"error_array_vacio";
}

export default function ToastProveedor({message , duration = 3000, onClose,tipo} : ToastProps) {



    useEffect(() =>{
        const timer = setTimeout(onClose,duration)
        return () => clearTimeout(timer)
    },[duration,onClose])

  return (
    <div className={`fixed top-5 left-1/2 -translate-x-1/2 ${tipo === "agregadosstage" ? "bg-blue-700" : tipo === "provenviados" ? "bg-green-700" : tipo === "error_validacion" ? "bg-orange-500" : "bg-red-700"} text-black px-4 py-2 rounded shadow-lg z-50`}>
        {message}
    </div>
  )
}