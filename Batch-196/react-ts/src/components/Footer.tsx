import { useBrowserWidth } from "../hooks/useBrowserWidth";

const Footer = () => {
  const browserWidth = useBrowserWidth();
  return <footer>Footer - {browserWidth}</footer>;
};

export default Footer;
