# 6. Xử lý Form

## 1. Lấy value từ Input

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

## 2. Lấy value từ Textarea

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

## 3. Lấy value từ Select

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

## 4 Lấy value từ Radio

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

## 5. Lấy value từ Checkbox

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
## 6. Lấy value từ Multi Checkbox

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

## 7. Cách lấy khi có nhiều loại một lúc

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

Thay vì đi làm việc thủ công với FORM như vậy thì có các thư viện giúp xử lí form nhanh hơn, kèm theo tính năng validate form, báo lỗi....

### React hook form

```bash
npm install react-hook-form
```

Example: <https://react-hook-form.com/get-started/#Quickstart>

### Formik

```bash
npm install formik --save
```
Example: <https://formik.org/docs/tutorial#a-simple-newsletter-signup-form>


### Yup validation

Sử dụng để validate form trong React

```bash
npm install yup --save
```

Cách sử dụng: <https://github.com/jquense/yup>

---

Formik với Yup Validation

Doc: <https://formik.org/docs/guides/validation>

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

