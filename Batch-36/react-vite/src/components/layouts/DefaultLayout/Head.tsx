import Navigation from "../../Navigation"
import UserInfo from "./UserInfo"

export const Header = ()=>{
    return (
        <header className="bg-indigo-500 py-5 text-white">
            <div className="container mx-auto">
                <div className="header_wrapper flex justify-between px-5">
                    <div className="logo">FakeShop</div>
                    <Navigation />
                    <UserInfo />
                </div>
            </div>
        </header>
    )
}