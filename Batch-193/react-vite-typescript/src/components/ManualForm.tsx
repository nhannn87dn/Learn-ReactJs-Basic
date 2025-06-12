import { useState, type ChangeEvent } from "react";

interface FormData {
    username: string;
    email: string;
    agree: boolean;
  }

const ManualForm = () => {
     // const [username, setUsername] = useState<string>("");
  // const [email, setEmail] = useState<string>("");

  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    agree: false,
  });

  //Dùng 1 hàm Handle dữ liệu chung
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    if (e.target.type === "checkbox") {
      const target = e.target as HTMLInputElement; // Kiểm tra kiểu
      setFormData((values) => ({ ...values, [target.name]: target.checked }));
    } else {
      const target = e.target as
        | HTMLInputElement
        | HTMLSelectElement
        | HTMLTextAreaElement; // Kiểm tra kiểu
      setFormData((values) => ({ ...values, [target.name]: target.value }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //ngăn form làm refresh app
    console.log("Bạn đã submit from");
    console.log(formData);
    if (formData.username.length === 0) {
      console.log("Vui lòng nhập username");
      return;
    }
    if (formData.email.length === 0) {
      console.log("Vui lòng nhập email");
      return;
    }

  };
  /*
    1. Gắn  onSubmit cho form, e.preventDefault()
    2. Tạo state quản lý trạng thái các inputs
    3. Gắn  onChange cho input, select, textarea
    4. Gắn value cho input, select, textarea 
  */
    return (
        <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
        />
        <input
          onChange={handleChange}
          value={formData.email}
          placeholder="Email"
          type="email"
          name="email"
          id="email"
        />

        <label htmlFor="agree">
          <input
            checked={formData.agree}
            onChange={handleChange}
            type="checkbox"
            name="agree"
            id="agree"
          />{" "}
          Đồng ý với điều khoản
        </label>
        <button type="submit">Submit</button>
      </form>
    )
}

export default ManualForm;