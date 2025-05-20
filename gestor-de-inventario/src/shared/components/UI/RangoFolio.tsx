export default function RangoFolio() {
    return (
        <div className="flex gap-5 items-center text-white">
            <div className="flex items-center justify-center gap-5">
                <h1 className="font-semibold">Rango de folio</h1>
                <input type="number" className="bg-[#3e4051] rounded-md p-1" />
            </div>
            <h1>-</h1>
            <div className="flex items-center justify-center gap-5">
                    <input type="number" className="bg-[#3e4051] rounded-md p-1"/>
            </div>
        </div>
    );
}

