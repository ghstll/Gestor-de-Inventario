function FormParamsReportFolioRange() {
    return (
        <div className="flex gap-5 items-center">
            <div className="flex items-center justify-center gap-5">
                <h1 className="font-semibold">Rango de folio</h1>
                <input type="number" className="border border-gray-700 rounded-md " />
            </div>
            <h1>-----</h1>
            <div className="flex items-center justify-center gap-5">
                    <input type="number" className="border border-gray-700 rounded-md " />
            </div>
        </div>
    );
}

export default FormParamsReportFolioRange;
