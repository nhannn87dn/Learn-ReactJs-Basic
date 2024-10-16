import React from 'react';
import LifecycleExample from './SessionExamples/session-03-State/LifecycleExample';
import ZustandExample from './SessionExamples/Session-10-Redux/ZustandExample';

function App() {

  const [isUnmount, setIsUnmount] = React.useState(false);

  return (
    <div className="App">
        <ZustandExample />
        {isUnmount === false && <LifecycleExample />}
        <button onClick={()=> setIsUnmount(!isUnmount)}>Unmount (Toggle)</button>
    </div>
  );
}

export default App;
