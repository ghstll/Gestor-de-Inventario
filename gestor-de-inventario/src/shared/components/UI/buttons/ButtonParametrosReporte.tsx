interface props {
    text : string;
    onClick : () => void;
}
export default function ButtonParametrosReportes({text , onClick} : props) {
  return (
    <button onClick={onClick} className="border border-black rounded-md p-1 bg-white hover:bg-gray-200 duration-300" >
        {text}
    </button>
  )
}