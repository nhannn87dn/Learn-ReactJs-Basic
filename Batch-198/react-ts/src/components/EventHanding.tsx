import { User, ShoppingBag } from "lucide-react";
import Button from "./Button";

const EventHanding = () => {

    //body của component, hàm ko có tham số
    const onHandleClick = ()=>{
         console.log('bạn đã clicked vào div');
    }

    const onHandleChannel =(channel: string)=>{
        console.log('Bạn đang xem '+ channel);
    }

  return (
    <>
    <button
    className="btn" 
    // cách dùng hàm ko có tham số
    onClick={onHandleClick}
    >Click</button>
    <hr />
    {/* cách dùng hàm có tham số */}
    <button onClick={()=>onHandleChannel('VTV 1')} className="btn">VTV 1</button>
    <button onClick={()=>onHandleChannel('VTV 2')} className="btn">VTV 2</button>
    <hr />
    <Button onHandleClick={()=>onHandleChannel('VTV 4')} icon={<User />} name="VTV 4" />
    <Button onHandleClick={()=>onHandleChannel('VTV 5')} icon={<ShoppingBag />} name="VTV 5" />
    </>
  )
}

export default EventHanding