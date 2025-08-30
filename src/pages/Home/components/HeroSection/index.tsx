import { CoffeeIcon, PackageIcon, ShoppingCartIcon, TimerIcon } from "@phosphor-icons/react"
import HomeCoffeeImage from "../../../../assets/images/home/home-coffee.svg"

export function HeroSection() {
    return (
        <section className="flex items-center justify-center mt-11">
            <div className="flex flex-col gap-4 w-1/2">
                <h1 className="text-5xl font-extrabold font-baloo text-base-title">Encontre o café perfeito para qualquer hora do dia</h1>
                <p className="text-xl font-roboto text-base-subtitle">Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

                <div className="grid grid-cols-2 gap-3 mt-14">
                    <div className="flex items-center gap-3">
                        <div className="bg-yellow-dark rounded-full p-2">
                            <ShoppingCartIcon size={16} color="var(--color-base-background)" weight="fill" />
                        </div>
                        <p className="font-roboto text-base-text">Compra simples e segura</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="bg-base-text rounded-full p-2">
                            <PackageIcon size={16} color="var(--color-base-background)" weight="fill" />
                        </div>
                        <p className="font-roboto text-base-text">Embalagem mantém o café intacto</p>
                        </div>

                    <div className="flex items-center gap-3">
                        <div className="bg-yellow rounded-full p-2">
                            <TimerIcon size={16} color="var(--color-base-background)" weight="fill" />
                        </div>
                        <p className="font-roboto text-base-text">Entrega rápida e rastreada</p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                        <div className="bg-purple rounded-full p-2">
                            <CoffeeIcon size={16} color="var(--color-base-background)" weight="fill" />
                        </div>
                        <p className="font-roboto text-base-text">O café chega fresquinho até você</p>
                    </div>
                </div>
                
            </div>
            <div>
                <img src={HomeCoffeeImage} alt="Coffee Delivery" />
            </div>
        </section>
    )
}