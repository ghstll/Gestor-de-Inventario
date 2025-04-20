import React from "react";

export default function AsideMenuSection({ title ,children}: { title: string ,children : React.ReactNode}) {
    return (
        <section className="mx-6 flex flex-col items-center gap-4">
            <header className="flex flex-row w-full items-center gap-3">
                <h3 className="font-Inter text-[#7a7a7a] font-bold text-[12px]">{title}</h3>
            </header>
            <div className="flex flex-col w-[100%]  gap-3">
                {children}
            </div>
        </section>
    );
}
