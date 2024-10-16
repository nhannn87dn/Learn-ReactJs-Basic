import React from 'react';

type ButtonTypeProps = {
  onClick: () => void;
  children?: React.ReactNode;
}

function Button({ onClick, children } : ButtonTypeProps) {
  console.log('Rendering button - ', children);
  return <button onClick={onClick}>{children}</button>;
}

// export default Button;
export default React.memo(Button);
