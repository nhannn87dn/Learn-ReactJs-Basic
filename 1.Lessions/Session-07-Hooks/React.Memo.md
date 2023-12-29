# React Memo 

- nó **Cache cả một class component và function component** -> bỏ qua việc **rendering** khi component đó không có biến `props`  nào thay đổi.

- **Khi nào dùng**: Khi mà component này độc lập hoàn toàn với component chứa nó (CHA), tức là khi CHA cần re-render nhưng CON không cần thiết phải re-render thì dùng. Tùy từng ngữ cảnh cụ thể. Component này không dùng State.



```js
function SayHello({name}){
  return (
    <>
    <h1>Hello {name}</H1>
    </>
  )

}
export default React.memo(SayHello)

function App(){
  const [count, setCount] = React.useState(0)
  const handleClick = () => {
    setCount(prev=>prev+1);
  }
  return (
    <>
    <p>{count}</p>
    <button onClick={handleClick}>Increament</button>
    {* SayHello không liên quan đến việc render lại giá trị count của App *}
    <SayHello name='Tony' />
    </>
  )

}
export default App
```