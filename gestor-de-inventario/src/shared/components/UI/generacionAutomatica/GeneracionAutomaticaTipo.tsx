interface props {
  icon : string;
  title : string;
  description : string;
  color : string;
  onClickFunc ?: () => void;
}

export default function GeneracionAutomaticaTipo({ ...props }: props) {
  return (
    <article className="w-[90%] border border-black rounded-md cursor-pointer p-3 hover:brightness-125 hover:scale-105 transition-all duration-200" style={{ backgroundColor: props.color }} onClick={props.onClickFunc}>
      <div className="flex items-center gap-2 ml-4">
        <img src={props.icon} alt="" />
        <h1 className="font-medium">{props.title}</h1>
      </div>
      <div>
        <h1 className="font-extralight italic">{props.description}</h1>
      </div>
    </article>
  )
}
