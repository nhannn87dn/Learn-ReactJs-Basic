const NavigationItem = ({link, label,target='_self'}: {link: string, label: string, target?: string}) => {
    return (
      <li><a target={target} href={link}>{label}</a></li>
    )
  }

  export default NavigationItem;