import { Header } from "./Head"
import { Footer } from "./Footer"
import { Outlet } from "react-router-dom"

export const DefaultLayout = ()=>{

    return (
        <>
        <Header />
        <main className="container mx-auto my-4">
            <Outlet />
        </main>
        <Footer />
        </>
    )
}