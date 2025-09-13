import { MapPinIcon } from "@phosphor-icons/react"

export function Checkout() {
    return (
        <section className="flex gap-8 justify-between mt-10">

            <div className="w-2/3 flex flex-col gap-3.5">
               <h1 className="font-baloo text-base-subtitle text-lg font-bold">Complete seu pedido</h1>

               <div className="bg-red-100 p-10">
                    <div className="flex items-center gap-2">
                        <MapPinIcon size={22} color="var(--color-yellow-dark)" />
                        <h2>Endereço de entrega</h2>
                    </div>
               </div>
            </div>

            <div className="w-1/3 flex flex-col gap-3.5">
                <h1 className="font-baloo text-base-subtitle text-lg font-bold">Cafés selecionados</h1>

                <div className="bg-red-100 p-10">
                    <h1>teste</h1>
               </div>
            </div>
            
        </section>
    )
}