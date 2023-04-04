# Lấy giá trị trong Form

## One way binding && Two-way binding

- One way binding?
- Two-way binding ?

Review lại ở Session State - Mục 6.2

***

Có thể dùng component [Formik](https://formik.org/docs/overview) để quản lý tiện hơn
Còn bên dưới là cách thủ công.

## 1. Input

```js
function MyForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
}
```

## 2. Textarea

```js
function MyForm() {
  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value attribute"
  );

  const handleChange = (event) => {
    setTextarea(event.target.value)
  }

  return (
    <form>
      <textarea value={textarea} onChange={handleChange} />
    </form>
  )
}
```

## 3. Select

```js
function MyForm() {
  const [myCar, setMyCar] = useState("Volvo");

  const handleChange = (event) => {
    setMyCar(event.target.value)
  }

  return (
    <form>
      <select value={myCar} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
  )
}
```

## 4 Radio

```js
import { useState } from "react"

function App() {
  const [topping, setTopping] = useState("Medium")

  const onOptionChange = e => {
    setTopping(e.target.value)
  }

  return (
    <div className="App">
      <h3>Select Pizza Size</h3>

      <input
        type="radio"
        name="topping"
        value="Regular"
        id="regular"
        checked={topping === "Regular"}
        onChange={onOptionChange}
      />
      <label htmlFor="regular">Regular</label>

      <input
        type="radio"
        name="topping"
        value="Medium"
        id="medium"
        checked={topping === "Medium"}
        onChange={onOptionChange}
      />
      <label htmlFor="medium">Medium</label>

      <input
        type="radio"
        name="topping"
        value="Large"
        id="large"
        checked={topping === "Large"}
        onChange={onOptionChange}
      />
      <label htmlFor="large">Large</label>

      <p>
        Select topping <strong>{topping}</strong>
      </p>
    </div>
  )
}

export default App
```

## 5. Checkbox

```js
export default function App() {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = (e) => {
    console.log(e.target.checked)
    setIsChecked(!isChecked);
  };

  return (
    <div className="App">
      Select your pizza topping:
      <div className="topping">
        <input
          type="checkbox"
          id="topping"
          name="topping"
          value="Paneer"
          checked={isChecked}
          onChange={handleOnChange}
        />
        Paneer
      </div>
      <div className="result">
        Above checkbox is {isChecked ? "checked" : "un-checked"}.
      </div>
    </div>
  );
}
```
## 6. Multi Checkbox

```js
//App.js
const courses = [
  {id: 1, name: 'Html'},
  {id: 2, name: 'Javascript'},
  {id: 3, name: 'React Js'}
]
export default function App() {
  const [checked, setChecked] = useState([]);

  const handelCheck = (id)=> {
    setChecked(prev =>   {
      const isCheck = checked.includes(id);
      //Bỏ check nếu đã check
      if(isCheck){
        return checked.filter(item => item !== id)
      }
      //Còn lại thêm mới để check
      return [...prev, id];
    })
  }

  const handleSubmit = ()=> {
    console.log(checked)
  }

  return (
    <div>
      {courses.map(course => {
        <label key={course.id}>
          <input
            type='checkbox'
            checked={checked.includes(course.id)}
            onChange={()=> handelCheck(course.id)}
          
          />
          {course.name}
        </label>
      })}
    
      <button type='submit' onClick={handleSubmit}>Submit</button>
    </div>

  );

}
```

## 7. Multi Input

Dùng khi có nhiều loại input khác nhau

```js
function Form(){
  const = [inputs, setInputs] = React.useState({
    userName: '',
    Passwords: ''
  
  });
  
  const = handleChange = e => {
    if(e.target.type === 'checkbox'){
      setInputs((values)=> ({...values, [e.target.name]: e.target.checked}));
      // [e.target.name] ==> lấy giá trị làm key
    } 
    else {
      setInputs((values)=> ({...values, [e.target.name]: e.target.value}));
    }
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
  )
  
}

```
===========================================


## 8. Thư viện hỗ trợ hay dùng

### React hook form

```bash
npm install react-hook-form
```

### Formik

```bash
npm install formik --save
```

### Yup validation

Sử dụng để validate form trong React

```bash
npm install yup --save
```

Cách sử dụng: <https://github.com/jquense/yup>

---
React Hook Form with Yup Validation

Bạn cần cài thêm

```bash
npm install @hookform/resolvers yup
```

```js
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  firstName: yup.string().required(),
  age: yup.number().positive().integer().required(),
}).required();
type FormData = yup.InferType<typeof schema>;

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data: FormData) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <p>{errors.firstName?.message}</p>
        
      <input {...register("age")} />
      <p>{errors.age?.message}</p>
      
      <input type="submit" />
    </form>
  );
}

```

===========================================

## 9. UI Component

### AntDesign

Cài đặt: https://ant.design/docs/react/introduce

```bash
npm install antd
yarn add antd
```

Cách dùng:

```js
/*
Dùng Component nào thì destructuring ra
*/
import { Button, Space } from 'antd';
const App = () => (
  <Space wrap>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </Space>
);
export default App;
```

***

###  Material-UI

Cài đặt: https://mui.com/material-ui/getting-started/installation/


```bash
npm install @mui/material @emotion/react @emotion/styled

yarn add @mui/material @emotion/react @emotion/styled
```
Xem chi tiết thêm ở link trên


Cách dùng:

```js
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}

```


### Chakra UI

https://chakra-ui.com/