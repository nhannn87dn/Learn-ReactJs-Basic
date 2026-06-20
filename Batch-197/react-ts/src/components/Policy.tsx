import { ShieldCheck, Truck, Undo2 } from "lucide-react";

const sayHello = (name: string, age: number) => {
  console.log("Hello " + name);
};
//sayHello('Tuan');
//sayHello('Nam');

//props là một object.

const PolicyItem = (props) => {
  console.log(props, "props");
  return (
    <li>
      {props.icon} {props.text}
    </li>
  );
};

const Policy = () => {
  return (
    <ul className="policy">
      {/* <li>Chính sách bảo hành</li>
      <li>Giao hàng & thanh toán</li> */}
      <PolicyItem icon={<Undo2 />} text="Chính sách đổi trả" />
      <PolicyItem icon={<ShieldCheck />} text="Chính sách bảo hành" />
      <PolicyItem icon={<Truck />} text="Giao hàng & thanh toán" />
    </ul>
  );
};

export default Policy;
