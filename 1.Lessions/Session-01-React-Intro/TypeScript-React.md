# React with TypeScript

## ⭐ 1.TypeScript ?

TypeScript is a syntactic superset of JavaScript which adds static typing.

This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add types.

- Learn TypeScript Basic:  
  - <https://www.w3schools.com/typescript/typescript_intro.php>
  - <https://www.typescriptlang.org/docs/handbook/2/basic-types.html>
  - <https://www.typescriptlang.org/cheatsheets>

## ⭐ 2.TypeScript on React

To start a new Create React App project with TypeScript, you can run:

```bash
npx create-react-app name-of-app --template typescript
#or
yarn create react-app my-app --template typescript
```

To add TypeScript to an existing Create React App project, first install it:

```bash
npm install --save typescript @types/node @types/react @types/react-dom @types/jest

#or

yarn add typescript @types/node @types/react @types/react-dom @types/jest

```

Next, rename any file to be a TypeScript file (e.g. src/index.js to src/index.tsx) and restart your development server!

### 🔥 **2.1 TypeScript - Props**

```js
// Declaring type of props - see "Typing Component Props" for more examples
Type AppProps {
    message: string
}
/* use `interface` if exporting so that consumers can extend */

function App({message} : AppProps) : JSX.Element{
    return <h1>{message}</h1>
}
```

More Example: <https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example>

### 🔥 **2.2 TypeScript - useState**

```js

interface Address {
  street: string;
  number: number;
  zip: string;
}


interface User {
  name: string;
  age: number;
  country: string;
  address: Address;
  admin: boolean;
}

export default function App() {
const [user, setUser] = useState<User | null>(null);

const fetchUser = () =>
    setUser({
      name: "Mitchel",
      age: 23,
      country: "the Netherlands",
      address: {
        street: "Main st.",
        number: 88,
        zip: "21345",
      },
      admin: false,
    });

 return (
    <>
      <button onClick={fetchUser}>Fetch user on click</button>
      {user && <p>{`Welcome ${user.name}`}</p>}
    </>
 )
}
```

More Doc:

- <https://github.com/gopinav/React-TypeScript-Tutorials>
- <https://github.com/piotrwitek/react-redux-typescript-guide#react--redux-in-typescript---complete-guide>

- <https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example>
- cheatsheets: <https://github.com/typescript-cheatsheets/react#reacttypescript-cheatsheets>
- React Typescript Course: <https://www.youtube.com/watch?v=PL1NUl7fQ2I&list=PLG-Mk4wQm9_LyKE5EwoZz2_GGXR-zJ5Ml>
