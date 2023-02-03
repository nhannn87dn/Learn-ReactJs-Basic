import React from 'react';
import photos from './data';

function StateSlideLifecycleExample() {
  const [count, setCount] = React.useState(0);
  const [count2, setCount2] = React.useState(100);

  // Mounting: Là khi component được gắn vào Parent Component
  React.useEffect(() => {
    console.log('StateSlideLifecycleExample: MOUNTING');
    const intervalId = setInterval(() => {
      console.log('Running');
      setCount((c) => c + 1);
    }, 10);

    return () => {
      console.log('Clear interval');
      clearInterval(intervalId);
    };
  }, []);

  // Updating: Sẽ chạy khi có bất kỳ state nào trong component thay đổi giá trị
  React.useEffect(() => {
    console.log('StateSlideLifecycleExample: UPDATING');
  });

  // Updating (Dependencies)
  React.useEffect(() => {
    console.log('StateSlideLifecycleExample: UPDATING DEPENDENCIES');
  }, [count2]);

  // UNMOUNTING
  React.useEffect(() => {
    return () => {
      console.log('StateSlideLifecycleExample: UNMOUNTING');
    };
  }, []);

  return (
    <div>
      {photos.map((item, index) => {
        return (
          <div>
            <h4>{item.title}</h4>
            <img src={item.thumbnailUrl} />
            
          </div>
        );
      })}
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

      <button
        onClick={() => {
          setCount2((c) => c + 1);
          // setCount(count + 1);
        }}
      >
        Increase 2
      </button>
    </div>
  );
}

export default StateSlideLifecycleExample;
