import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList"
import TodosList from "./components/TodosList";
import './components/Button.css'
import { FaCartPlus, FaHeart} from "react-icons/fa";
import ButtonV3 from "./components/ButtonV3";
//Cách tạo ra 1 component
//Cách đặt tên: theo kiểu Pascal Case
//Một function component được hiểu là một function có kí tự đầu tiên viết HOA

function Button(props : {icon: string, label: string}){
  console.log('ButtonAddToCart render', props);
  return (
    <>
    <button>{props.icon} {props.label}</button>
    </>
  )
}


//Cách viết prop thứ 2 tường minh hơn
type ButtonPropType = {
  icon: React.ReactNode,
  label: string,
  className?:string
}
function ButtonV2({icon, label}: ButtonPropType){
  console.log('ButtonAddToCart render');
  return (
    <>
    <button>{icon} {label}</button>
    </>
  )
}

//Cách 1
ButtonV2.defaultProps = {
  icon: "",
  label: 'Default',
}

//Cách 2








//function javascript bình thường
function buttonAddToCart(){

}

function App() {
  console.log('App render');
  const name = 'Nhân';
  // let html = `<div>Hello ${name}</div>`; //js
  const html = <div>Hello {name}</div>;//jsx

  const a = 3;
  const b = 5;

  const result = <div>
    <div>Kết quả phép tính { a + b } </div>
              <div>Kết quả phép tính { b - a } </div>
  </div>

  return (
    <div className="container mx-auto">
      <h1 style={{backgroundColor: 'red', fontSize: 40}}>Hello React</h1>
      <h2 className="text-3xl font-bold underline">
      Hello world!
    </h2>
    <button className="btn btn-orange">Login</button>
    <button className="btn btn-sky">Login</button>
      <p>DÙng như là một thẻ trong html</p>
      <img src="" alt="" />
      <input type="text" />
      {html}
      {result}
      <p>comment trong JSX</p>
      <hr />  
      <ButtonV3 icon={<FaCartPlus />} label='Thêm vào giỏ hàng' />
      <ButtonV3 className="button_dark" icon={<FaHeart />} label='Yêu thích' />
      {/* <ButtonV3 icon={<FaCartPlus />} label='Thêm vào giỏ hàng' />
      <ButtonV3 className='button button-dark' icon={<FaHeart />} label='Yêu thích' /> */}
      <hr />
      <ButtonV2 icon='D' label='Login v2' />
      <Button icon='A' label='Login' />
      <Button icon='B' label='Logout' />
      <Button icon='C' label='Submit' />
      <TodoList />
      <hr />
      <TodosList>
          <TodoItem task='Quét nhà' />
          <TodoItem task='Lau nhà' />
      </TodosList>
    </div>
  )
}

export default App
