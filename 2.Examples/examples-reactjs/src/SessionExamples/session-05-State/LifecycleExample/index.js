import React from 'react';

function LifecycleExample() {
  const [count, setCount] = React.useState(0);

  // Mounting: Là khi component được gắn vào Parent Component
  // Chỉ chạy 1 lần đầu
  React.useEffect(() => {
    console.log('LifecycleExample: MOUNTING');
    
  },[]);

  // Updating: Sẽ chạy khi có bất kỳ state nào trong component
  // thay đổi giá trị
  React.useEffect(() => {
    console.log('LifecycleExample: UPDATING');
  });

  // Updating (Dependencies)
  // Chạy lần đầu, vả chỉ chạy lại khi biến count thay đổi
  React.useEffect(() => {
    console.log('LifecycleExample: UPDATING DEPENDENCIES');
  }, [count]);

  // UNMOUNTING
  React.useEffect(() => {
    return () => {
      console.log('LifecycleExample: UNMOUNTING');
    };
  },[]);

  return (
    <div>
      
      <h1>LifecycleExample</h1>
      <h2>Count: {count}</h2>
      <button
        onClick={() => {
          setCount((c) => c + 1);
          // setCount(count + 1);
        }}
      >
        Increase
      </button>
      
    </div>
  );
}

export default LifecycleExample;
