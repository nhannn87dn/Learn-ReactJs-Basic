import { useEffect,useState } from "react";

const UseEffectExample  = ({name}: {name: string})=>{
    const message = `Hello, ${name} !`; // Calculates output
    const [title, setTitle] = useState('');
    const [person, setPerson] = useState('Jonh');
    const [count, setCount] = useState(0);

    console.log('UseEffectExample re-render',person);
    // Bad!
    //document.title = `Greetings to ${name}`; // Side-effect!

    //Cách dùng tối ưu hơn
    // useEffect(()=>{
    //   console.log('2');
    //   document.title = `Greetings to ${name}`; // Side-effect!
    // });

    // useEffect(()=>{
    //   console.log('2');
    //   document.title = `Greetings to ${person}`; // Side-effect!
    // },[]);
    //Tham số thứ 2 là một mảng rổng 
    //callback nó chỉ chạy duy nhất lần đầu tiên khi render

    useEffect(()=>{
      console.log('2');
      document.title = `Greetings to ${person}`; // Side-effect!
    },[person]);
    //Khi tham số thứ 2, là một mảng ko rổng
    //Callback nó luôn chạy lần đầu tiên
    //Callback chỉ chạy lại lần tiếp theo khi mà, giá trị của mảng thay đổi


    useEffect(()=> {
      const interval =  setInterval(() => {
            setCount((count) => count + 1);
            console.log('This will run every second!');
        }, 1000); //1s

        //Hủy biến interval đi
        return () => clearInterval(interval);
        //Giúp tránh xảy ra memory leak, chống rò rỉ bộ nhớ

    },[]);
    
    return (
      <div>
        <h1>{count}</h1>
      {console.log('1')}

      {message}


       <div className="flex gap-x-4 my-5">
      <button className="btn" onClick={()=> {
          setPerson('Jonh')
        }}>Jonh</button>
      <button className="btn" onClick={()=> {
          setPerson('Alice')
        }}>Alice</button>
      <button className="btn" onClick={()=> {
          setPerson('Sarah')
        }}>Sarah</button>
    </div>
      
      <input value={title} name="title" onChange={(e)=> {
        setTitle(e.target.value);
      }} />
      
      </div>);       // Calculates output
    //Ưu tiên làm sao cho phần return được chạy sớm nhất
}
export default UseEffectExample
