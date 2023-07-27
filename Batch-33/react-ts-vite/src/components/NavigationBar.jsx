function NaviItem(props){
    return (
        <li><a href="">{props.label}</a></li>
    )
}

function NavigationBar(){
    return (
        <ul>
            <NaviItem label='Home' />
            <NaviItem label='Blog' />
            <NaviItem label='About' />
            <NaviItem label='Contact' />
        </ul>

    )
}

export default NavigationBar