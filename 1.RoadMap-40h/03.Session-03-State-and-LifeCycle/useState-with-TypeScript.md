# React useState with TypeScript

```js
interface PersonProps {
  name: string;
  age: number;
  hobbies: Array<string>;
  isCool: boolean;
}

// Boolean type
const [isCool] = React.useState<boolean>(true);

// String type
const [name] = React.useState<string>('Ruben');

// Number type
const [age] = React.useState<number>(28);

// Null or undefined
const [random] = React.useState<null | undefined>();

// Array of string 
const [hobbies] = React.useState<Array<string>>(['soccer', 'cooking', 'code']);

// Custom interface
const [person] = React.useState<PersonProps>({
  isCool,
  name,
  age,
  hobbies
});

```