import React from 'react';

function EventHandlerExamples() {
  const [name, setName] = React.useState<string>('John');

  return (
    <div>
      <input
        type='text'
        value={name}
        placeholder='Enter your name'
        onChange={(e: React.FormEvent<HTMLInputElement>) : void  => {
          console.log(e.currentTarget.value);
          setName(e.currentTarget.value);
        }}
      />
    </div>
  );
}

export default EventHandlerExamples;
