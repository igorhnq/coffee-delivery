import { CurrencyDollarSimpleIcon, MapPinIcon, TimerIcon } from "@phosphor-icons/react";
import DeliveryIllustration from "../../assets/images/sucess/delivery-illustration.svg";

export function Sucess() {
    return (
        <section className="mt-20 flex gap-8 justify-between">

            <div className="flex-1 flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-baloo font-extrabold text-yellow-dark">
                        Uhu! Pedido confirmado
                    </h1>

                    <p className="text-xl font-roboto font-regular text-base-subtitle">
                        Agora é só aguardar que logo o café chegará até você
                    </p>
                </div>

                <div className="relative p-[1px] rounded-[6px_36px] bg-gradient-to-br from-yellow to-purple">
                    <div className="bg-white rounded-[6px_36px] p-10 flex flex-col gap-8">

                        <div className="flex items-center gap-3">
                            <div className="bg-purple rounded-full p-2">
                                <MapPinIcon size={16} color="var(--color-base-background)" weight="fill" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-roboto text-base-text">
                                    Entrega em <span className="font-bold">Rua do João de Barro, 321</span>
                                </span>
                                <span className="text-base-text">Farrapos - Porto Alegre, RS</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="bg-yellow rounded-full p-2">
                                <TimerIcon size={16} color="var(--color-base-background)" weight="fill" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-roboto text-base-text">Previsão de entrega</span>
                                <span className="font-bold text-base-text">20 min - 30 min</span>
                            </div>
                        </div>
                          
                        <div className="flex items-center gap-3">
                            <div className="bg-yellow-dark rounded-full p-2">
                                <CurrencyDollarSimpleIcon size={16} color="var(--color-base-background)" weight="fill" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-roboto text-base-text">Pagamento na entrega</span>
                                <span className="font-bold text-base-text">Cartão de Crédito</span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="flex-1 flex justify-center items-center">
                <img src={DeliveryIllustration} alt="Ilustração de entrega" />
            </div>

        </section>
    )
}