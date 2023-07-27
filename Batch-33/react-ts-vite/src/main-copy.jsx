import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const elementJs = React.createElement('h1', { className: 'greeting' }, 'Hello, world!');

const elementJSX = <h1 className="greeting">Hello, JSX!</h1>;

const listJSX = <ul>
  <li>Child 1</li>
  <li>Child 2</li>
</ul>;

const htmlJsx = <div>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quo? Ab ipsa voluptas quos esse tenetur inventore impedit neque quam veniam cupiditate quis vel, ut beatae doloribus vero sapiente provident.</p>
  <div>div con</div>
</div>


let name = 'Nhan';

let msg = <p>Hello {name}</p>;

let imgJSX = <img src="" alt="" />

let inputJSX = <input type="text" name="" id="" />

 //{} chúng ta có thẻ sử dụng bất kỳ cú pháp js ở giữa nó đều đc
const myelement = <h1 className="heading" style={{backgroundColor: 'red',fontSize: '16px', color: '#111'}}>React is {5 + 5} times better with JSX</h1>;

const htmlConvert = <div>
  <h1>Hedy Lamarr's Todos</h1>
  <img 
    src="https://i.imgur.com/yXOvdOSs.jpg" 
    alt="Hedy Lamarr" 
    className="photo"
  />
  <ul>
      <li>Invent new traffic lights</li>
      <li>Rehearse a movie scene</li>
      <li>Improve the spectrum technology</li>
  </ul>
  {/*
    Đây là comment trong JSX
  */}
</div>;

ReactDOM.createRoot(document.getElementById('root')!).render(
  htmlConvert,
)


// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
