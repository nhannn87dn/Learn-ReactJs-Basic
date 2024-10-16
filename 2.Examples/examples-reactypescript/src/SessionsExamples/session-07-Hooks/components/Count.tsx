import React from 'react';

type CountTypeProps = {
  count: number,
  text: string
}

function Count({ text, count } : CountTypeProps) {
  console.log(`Render Count: ${text}`);
  return (
    <div>
      {text} - {count}
    </div>
  );
}

// export default Count;
// export default Count;
export default React.memo(Count);
