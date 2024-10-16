import React from 'react'
import DataGrid from '../../components/DataGrid';

const TsGenericComponents = () => {
    /* Khi một Component DataGrid được tái sử dụng cho 2 loại data nhưng cùng thuộc tính id */
   const users = [
    { id: 1, name: "John", age: 55 },
    { id: 2, name: "Mitchel", age: 23 },
    { id: 3, name: "Mike", age: 50 },
  ];

  const orders = [
    { id: 1, quantity: 5, amount: 75 },
    { id: 2, quantity: 2, amount: 20 },
    { id: 3, quantity: 1, amount: 40 },
  ];

  return (
    <>
      <DataGrid items={users} />

      <br />

      <DataGrid items={orders} />
    </>
  );
}

export default TsGenericComponents