import { useState } from "react";

const FormExample = () => {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [agree, setAgree] = useState(false);
  //Tất cả các sate trên đùng chung trong 1 logic về xử lý form
  //Thay vì đi tạo 3 state riêng lẻ, ta có thể gom chung vào 1 state object
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    agree: false,
  });

  const onHandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); //chặn reload trang khi submit form

    //Xử lý dữ liệu form ở đây
    //+ Validate dữ liệu
    if (formData.name.length < 5) {
      alert("Name phải dài hơn 5 ký tự");
      return; //dừng không gửi dữ liệu đi
    }
    //+ Gửi dữ liệu đi ...
  };

  const onPlayChannel = (channel: string) => {
    alert("Playing channel: " + channel);
  };

  return (
    <div>
      <h1>FormExample</h1>
      <h2>
        Get Data from Form: Name: {formData.name}, Email: {formData.email}
      </h2>
      <button onClick={() => onPlayChannel("VTV 1")}>VTV 1</button>
      <button onClick={() => onPlayChannel("VTV 2")}>VTV 2</button>
      <form onSubmit={onHandleSubmit} className="p-5">
        <div className="form-input my-3  flex items-center gap-3">
          <label className="w-15" htmlFor="name">
            Name:
          </label>
          <input
            onChange={(event) => {
              //lấy giá trị từ ô input, gán cho state name
              setFormData({ ...formData, name: event.target.value });
            }}
            value={formData.name}
            type="text"
            id="name"
            name="name"
          />
        </div>
        <div className="form-input my-3  flex items-center gap-3">
          <label className="w-15" htmlFor="email">
            Email:
          </label>
          <input
            onChange={(event) => {
              //lấy giá trị từ ô input, gán cho state email
              setFormData({ ...formData, email: event.target.value });
            }}
            value={formData.email}
            type="text"
            id="email"
            name="email"
          />
        </div>
        <div className="form-input my-3  flex items-center gap-3">
          <label htmlFor="agree">
            <input
              onChange={(event) => {
                //riêng cho checkbox, lấy thuộc tính checked
                console.log(
                  "<<=== 🚀 event.target.checked ===>>",
                  event.target.checked,
                );
                setFormData({ ...formData, agree: event.target.checked });
              }}
              type="checkbox"
              id="agree"
              name="agree"
            />{" "}
            I agree to terms
          </label>
        </div>
        <div className="form-input my-3  flex items-center gap-3">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FormExample;
