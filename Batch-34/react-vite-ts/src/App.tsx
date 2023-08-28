import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList"
import TodosList from "./components/TodosList";
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
  icon: string,
  label: string
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
  label: 'Default'
}

//Cách 2
function ButtonV3({icon='', label='Default'}: ButtonPropType){
  console.log('ButtonAddToCart render');
  return (
    <>
    <button>{icon} {label}</button>
    </>
  )
}








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
    <>
      <h1 style={{backgroundColor: 'red', fontSize: 40}}>Hello React</h1>
      <p>DÙng như là một thẻ trong html</p>
      <img src="" alt="" />
      <input type="text" />
      {html}
      {result}
      <p>comment trong JSX</p>
      <ButtonV2 />
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
    </>
  )
}

export default App
