import { HeroSection } from "./components/HeroSection"
import { Card } from "./components/Card"
import { coffeesData } from "../../coffees"

export function Home() {
    return (
        <>
            <HeroSection />
            <section className="my-20">
                <h2 className="text-3xl font-baloo text-base-subtitle font-extrabold mb-14">Nossos cafés</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 lg:gap-8">
                    {coffeesData.coffees.map((coffee) => (
                        <Card 
                            key={coffee.id} 
                            id={coffee.id} 
                            title={coffee.title} 
                            description={coffee.description} 
                            tags={coffee.tags} 
                            price={coffee.price} 
                            image={coffee.image} 
                        />
                    ))}
                </div>
            </section>
        </>
    )
}