import { Header } from "./Head"
import { Outlet } from "react-router-dom"

export const OnlyHeaderLayout = ()=>{

    return (
        <>
        <Header />
        <main className="container mx-auto my-4">
            <Outlet />
        </main>
        </>
    )
}