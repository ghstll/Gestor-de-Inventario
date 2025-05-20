interface props {
    text : string;
    onClick : () => void;
}
export default function ButtonParametrosReportes({text , onClick} : props) {
  return (
    <button onClick={onClick} className="border border-white rounded-md p-1 bg-black text-white hover:bg-gray-800 duration-300" >
        {text}
    </button>
  )
}