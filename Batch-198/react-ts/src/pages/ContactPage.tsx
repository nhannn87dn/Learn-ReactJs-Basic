import { Helmet } from "react-helmet-async";
import Count from "../components/Count";
import CountHangXom from "../components/CountHangXom";

const ContactPage = () => {
  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact Page</title>
      </Helmet>
      <h1>Contact Page</h1>
      <Count />
      <hr />
      <CountHangXom />
    </div>
  );
};

export default ContactPage;
