# 6. Xử lý Form

## One way binding && Two-way binding

Làm rõ 2 khái niệm

- One way binding?
- Two-way binding ?

***

1. **One-way binding (ràng buộc một chiều)**:

One-way binding là cách liên kết dữ liệu trong React mà dữ liệu chuyển từ thành phần cha xuống các thành phần con, nhưng không có sự truyền ngược từ thành phần con lên thành phần cha. Trong one-way binding, dữ liệu chủ yếu được truyền qua các props từ component cha xuống component con. Khi dữ liệu trong component cha thay đổi, nó sẽ chuyển xuống các component con và các component con sẽ cập nhật dựa trên các props mới. Tuy nhiên, các thành phần con không thể thay đổi dữ liệu của thành phần cha. Điều này giúp tạo ra một luồng dữ liệu có hướng và giúp làm giảm sự phức tạp trong quá trình xác định nguyên nhân gây ra lỗi.

Ví dụ one-way binding:

```js
import React, { useState } from 'react';

const ParentComponent = () => {
  const [message, setMessage] = useState('');

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div>
      <input type="text" value={message} onChange={handleMessageChange} />
      <ChildComponent message={message} />
    </div>
  );
};

const ChildComponent = ({ message }) => {
  return <p>{message}</p>;
};

```

Trong ví dụ trên, `ParentComponent` có một input, và `ChildComponent` hiển thị giá trị của `message`. Giá trị message được truyền từ `ParentComponent` xuống `ChildComponent` thông qua props message.


2. **Two-way binding (ràng buộc hai chiều)**:

Two-way binding là cách liên kết dữ liệu trong React mà dữ liệu có thể di chuyển hai chiều giữa thành phần cha và các thành phần con. Khi dữ liệu trong component cha thay đổi, nó sẽ chuyển xuống các component con thông qua props như one-way binding. Nhưng trong two-way binding, các thành phần con cũng có thể gửi thông tin trở lại cho thành phần cha thông qua các sự kiện. Điều này cho phép các thành phần con thay đổi dữ liệu của thành phần cha và ngược lại.


```js
import React, { useState } from 'react';

const ParentComponent = () => {
  const [message, setMessage] = useState('');

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div>
      <input type="text" value={message} onChange={handleMessageChange} />
      <ChildComponent message={message} onMessageChange={setMessage} />
    </div>
  );
};

const ChildComponent = ({ message, onMessageChange }) => {
  const handleChildMessageChange = (event) => {
    onMessageChange(event.target.value);
  };

  return <input type="text" value={message} onChange={handleChildMessageChange} />;
};

```

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

