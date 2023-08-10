import React from 'react';
import { useQuery } from '@tanstack/react-query'

function TotoComponent() {
    //Call API lấy data, kèm các trạng thái liên quan
  const { data, isLoading, error } = useQuery('todos', () =>
    fetch('https://jsonplaceholder.typicode.com/todos').then((response) =>
      response.json()
    )
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
}

export default TotoComponent