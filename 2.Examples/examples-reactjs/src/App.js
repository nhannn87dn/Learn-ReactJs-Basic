import React from 'react';
import LifecycleExample from './SessionExamples/session-03-State/LifecycleExample';

function App() {

  const [isUnmount, setIsUnmount] = React.useState(false);

  return (
    <div className="App">
        {isUnmount === false && <LifecycleExample />}
        <button onClick={()=> setIsUnmount(!isUnmount)}>Unmount (Toggle)</button>
    </div>
  );
}

export default App;
