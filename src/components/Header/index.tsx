import CoffeeDeliveryLogo from "../../assets/images/coffee-delivery-logo.svg"

import { MapPinIcon, ShoppingCartIcon } from "@phosphor-icons/react"

export function Header() {
    return (
        <header className="flex justify-between items-center mt-8 font-roboto">
            <img src={CoffeeDeliveryLogo} />
            <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 bg-purple-light p-2 rounded-md text-purple-dark h-10">
                    <MapPinIcon size={22} color="var(--color-purple)" weight="fill" />
                    Porto Alegre, RS
                </div>
                <div className="bg-yellow-light p-2 rounded-md h-10">
                    <ShoppingCartIcon size={22} fill="var(--color-yellow-dark)" weight="fill"  />
                </div>
            </div>
        </header>
    )
}