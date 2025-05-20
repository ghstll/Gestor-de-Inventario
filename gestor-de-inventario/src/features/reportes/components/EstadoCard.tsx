interface props{
    text : string;
    value : string;
    units : string;
    color : string;
    
}
export default function EstadoCard({text,value,units,color} : props) {
    return (
        <article style={{backgroundColor : color}}>
            <h1>{text}</h1>
            <h1>{value}</h1>
            <h1>{units}</h1>
        </article>
    )
}