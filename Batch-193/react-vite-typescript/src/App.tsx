import "./App.css";
import Policy from "./components/Policy";
import ProductList from "./components/ProductList";
import Tags from "./components/Tags";
import Videos from "./components/Videos";

const NotiItem = ({
  message,
  isRead = false,
}: {
  message: string;
  isRead?: boolean;
}) => {
  if (isRead) {
    return <li>{message} ✔</li>;
  }
  return <li>{message}</li>;
};

const people = [
  "Creola Katherine Johnson: mathematician",
  "Mario José Molina-Pasquel Henríquez: chemist",
  "Mohammad Abdus Salam: physicist",
  "Percy Lavon Julian: chemist",
  "Subrahmanyan Chandrasekhar: astrophysicist",
];

function App() {
  const isShowPolicy = false;
  const isShowNotification = true;
  return (
    <div className="container mx-auto my-5">
      <h1>Learn React Basic</h1>
      <Tags />
      <hr />
      <Videos />
      <hr />
      <ul>
        {people.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
      <ProductList />
      <hr />
      <p>Render ra component Policy khi isShowPolicy == true</p>
      {/* {isShowPolicy === true ? <Policy /> : null} */}
      {isShowPolicy && <Policy />}

      {isShowNotification && (
        <ul>
          <NotiItem isRead={true} message="Thông báo 1" />
          <NotiItem isRead={false} message="Thông báo 2" />
        </ul>
      )}
    </div>
  );
}

export default App;
