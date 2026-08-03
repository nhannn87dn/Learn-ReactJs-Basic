import { useState } from "react";

const RegisterForm = ()=>{
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        age: '',
        agree: false
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked, type } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Dữ liệu đã gửi:', formData);
    
  };

    return (
        <form onSubmit={handleSubmit} className="form_login">
            <div>
                <label htmlFor="email">Email</label>
                <input onChange={handleChange} type="text" name="email" id="email" />
            </div>
            <div>
                <label htmlFor="name">Name</label>
                <input onChange={handleChange} type="text" name="name" id="name" />
            </div>
            <div>
                <label htmlFor="age">Age</label>
                <input onChange={handleChange} type="text" name="age" id="age" />
            </div>
             <div>
                <label htmlFor="agree">
                    <input onChange={handleChange} type="checkbox" name="agree" id="agree" /> Đồng ý điều khoản sử dụng
                </label>
             </div>
            <div>
                <button type="submit" className="btn">Register</button>
            </div>
        </form>
    )
}


const FormExample = () => {
  return (
    <div>
        <RegisterForm />
        {/* <form onSubmit={(e)=>{
            e.preventDefault(); //de ngan form load  lai page

            console.log(formData);
            //validation
        }} className="form_login">
            <div>
                <label htmlFor="email">Email</label>
                <input onChange={(e)=>{
                    console.log(e.target.value);
                    setFormData({...formData, email: e.target.value})
                }} type="text" name="email" id="email" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input onChange={(e)=>{
                    console.log(e.target.value);
                    setFormData({...formData, password: e.target.value})
                }} type="text" name="password" id="password" />
            </div>
             <div>
                <label htmlFor="remember">
                    <input onChange={(e)=>{
                    console.log(e.target.checked);
                    setFormData({...formData, remember: e.target.checked})
                }} type="checkbox" name="remember" id="remember" /> Ghi nhớ mật khẩu
                </label>
             </div>
            <div>
                <button type="submit" className="btn">Login</button>
            </div>
        </form> */}
    </div>
  )
}

export default FormExample

/*
Taọ một component FormRegister
- Gồm 3 trường: email, name, age, agree
- Khi click Nút Register thì log ra giá trị đã điền vào form
*/