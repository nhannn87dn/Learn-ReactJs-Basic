import { Header } from "./Head"
import { Footer } from "./Footer"

export const DefaultLayout = ({children}: {children: React.ReactNode})=>{

    return (
        <>
        <Header />
        <main className="container mx-auto my-4">
            {children}
        </main>
        <Footer />
        </>
    )
}