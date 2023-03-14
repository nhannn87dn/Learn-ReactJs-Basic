import React, {useEffect, useState} from 'react';


/**
 * Xem tất cả ví dụ ở link
 * https://bobbyhadz.com/blog/react-typescript-usestate-array-of-objects#type-usestate-as-array-of-objects-in-react-typescript
 * 
 */



//Type useState as Array of Objects in React TypeScript
export  const ArrayObject = () => {
  // 👇️ const employees: {salary: number;name: string;}[]
  const [employees, setEmployees] = useState<{salary: number; name: string}[]>(
    [],
  );

  return (
    <div>
      <button
        onClick={() =>
          setEmployees(prevEmployees => [
            ...prevEmployees,
            {salary: 100, name: 'Bob'},
          ])
        }
      >
        Add employee
      </button>

      {employees.map((employee, index) => {
        return (
          <div key={index}>
            <h2>
              salary: {employee.salary} / name: {employee.name}
            </h2>
          </div>
        );
      })}
    </div>
  );
};


//Type useState as Array of Objects using a Type Alias or an Interface


type Employee = {
  salary: number;
  name: string;
};

export const ArrayObjectAlias = () => {
  // 👇️ const employees: Employee[]
  const [employees, setEmployees] = useState<Employee[]>([]);

  return (
    <div>
      <button
        onClick={() =>
          setEmployees(prevEmployees => [
            ...prevEmployees,
            {salary: 100, name: 'Bob'},
          ])
        }
      >
        Add employee
      </button>

      {employees.map((employee, index) => {
        return (
          <div key={index}>
            <h2>
              salary: {employee.salary} / name: {employee.name}
            </h2>
          </div>
        );
      })}
    </div>
  );
};

//When you don't know all of the properties in advance

export const ArrayObjectAdvenced = () => {
  // 👇️ flexible object type
  const [employee, setEmployee] = useState<{[key: string]: any}>({});

  useEffect(() => {
    setEmployee({
      name: 'James',
      salary: 100,
      department: 'Dev',
      tasks: ['dev', 'test', 'ship'],
    });
  }, []);

  return (
    <div>
      <h2>Name: {employee.name}</h2>
      <h2>Salary: {employee.salary}</h2>
    </div>
  );
};


// Type useState with empty Object initial value in React (TS)

export const EmptyObjectInitial = () => {
  // 👇️ const employee: {[key: string]: any;}
  const [employee, setEmployee] = useState<{[key: string]: any}>({});

  useEffect(() => {
    setEmployee({
      name: 'Alice',
      salary: 100,
      department: 'Dev',
      tasks: ['dev', 'test', 'ship'],
    });
  }, []);

  return (
    <div>
      <h2>Name: {employee.name}</h2>
      <h2>Salary: {employee.salary}</h2>
    </div>
  );
};


//Using a union type



type EmployeeUnionType = {
  [key: string]: any;
  // 👇️ age is number OR string
  age?: number | string;
  tasks?: string[] | number[];
};

const EmployeeUnion = () => {
  // 👇️ const employee: {[key: string]: any;}
  const [employee, setEmployee] = useState<EmployeeUnionType>({});

  useEffect(() => {
    setEmployee({
      name: 'Alice',
      salary: 100,
      department: 'Dev',
      tasks: ['dev', 'test', 'ship'],
    });
  }, []);

  return (
    <div>
      <h2>Name: {employee.name}</h2>
      <h2>Salary: {employee.salary}</h2>
    </div>
  );
};


