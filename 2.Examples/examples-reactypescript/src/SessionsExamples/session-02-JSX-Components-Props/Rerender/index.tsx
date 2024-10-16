import React from 'react';

function App() {
   
    console.log("Parent rendered");
    return (
      <div className="wrap">
          <h1>Parent Component</h1>
          <div>-----------------</div>
          <Child />
      </div>
    );
  }
  
  // Chỉ có biến count thay đổi ở Child
  // Check console để xem
  function Child(){
      const [count,setCount]= React.useState(0);
      console.log("Child Rendered");
      return(
          <div>
              <h1>Child Component</h1>
              <button onClick={()=>setCount(count+1)}>
              Increase
              </button>
              <p>Count:{count}</p>
      </div>
      );
  }
   
  export default App;