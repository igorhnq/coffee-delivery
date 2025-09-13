import { MinusIcon, PlusIcon, ShoppingCartIcon } from "@phosphor-icons/react";

interface CardProps {
    id: string;
    title: string;
    description: string;
    tags: string[];
    price: number;
    image: string;
}

export function Card({ title, description, tags, price, image }: CardProps) {
    return (
        <div className="flex flex-col items-center text-center bg-base-card rounded-[6px_36px] p-5 w-64 h-[310px] relative">
            <img 
                src={image} 
                className="absolute top-[-20px] max-w-[120px] max-h-[120px]"
            />
            <div className="flex items-center justify-center gap-1 mb-4 mt-18 flex-wrap">
                {tags.map((tag) => (
                    <span 
                        key={tag}
                        className="px-2 py-1 rounded-full bg-yellow-light text-yellow-dark text-xs font-bold uppercase font-roboto"
                    >
                        {tag}
                    </span>
                ))}
            </div>            
            <div className="flex flex-col items-center gap-2">
                <h3 className="text-xl font-bold text-base-subtitle font-baloo">{title}</h3>
                <p className="text-sm font-roboto text-base-label">{description}</p>
            </div>
            <footer className="flex justify-between items-center w-full">
                <div className="flex items-center gap-1 mt-8 w-full justify-between">
                    <div className="flex items-center gap-1">
                        <span className="text-sm font-roboto text-base-text">R$</span>
                        <span className="text-2xl font-extrabold font-roboto text-base-text">
                            {price.toFixed(2).replace('.', ',')}
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-2 bg-base-button rounded-md p-2">
                            <button
                                className="text-purple-dark"
                            >
                                <MinusIcon size={14} weight="bold" />
                            </button>
                            <span className="text-base-text font-roboto min-w-[20px] text-center">
                                1
                            </span>
                            <button
                                className="text-purple-dark"
                            >
                                <PlusIcon size={14} weight="bold" />
                            </button>
                        </div>
                        <div className="bg-purple-dark rounded-md p-2 flex items-center justify-center w-[38px]">
                            <ShoppingCartIcon size={22} color="var(--color-base-card)" weight="fill" />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}