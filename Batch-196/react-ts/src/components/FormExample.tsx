import { useState } from "react";

const FormExample = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  return (
    <div>
      <h1>FormExample</h1>
      <h2>
        Get Data from Form: Name: {name}, Email: {email}
      </h2>
      <form
        onSubmit={(event) => {
          event.preventDefault(); //chặn reload trang khi submit form

          //Xử lý dữ liệu form ở đây
          //+ Validate dữ liệu
          if (name.length < 5) {
            alert("Name phải dài hơn 5 ký tự");
            return; //dừng không gửi dữ liệu đi
          }
          //+ Gửi dữ liệu đi ...
        }}
        className="p-5"
      >
        <div className="form-input my-3  flex items-center gap-3">
          <label className="w-15" htmlFor="name">
            Name:
          </label>
          <input
            onChange={(event) => {
              //lấy giá trị từ ô input, gán cho state name
              setName(event.target.value);
            }}
            value={name}
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
              setEmail(event.target.value);
            }}
            value={email}
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
                setAgree(event.target.checked);
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
