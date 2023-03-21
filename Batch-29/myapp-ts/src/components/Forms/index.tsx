import React from "react";

const courses = [
    {id: 1, name: 'Html'},
    {id: 2, name: 'Javascript'},
    {id: 3, name: 'React Js'}
  ]

export const Forms = ()=>{
    let [username, setUsername] = React.useState<string>("");
    let [content, setContent] = React.useState<string>("");
    let [isHidden,setIsHidden] = React.useState<boolean>(true);

    let handleonChangeContent = (e : React.ChangeEvent<HTMLTextAreaElement>)=>{
        console.log(e.target.value);
        setContent(e.target.value)
    }

    const [checked, setChecked] = React.useState<number[]>([]);

    console.log(checked);

  const handelCheck = (id : number)=> {
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
    return (
        <>
        <form className="registerForm">
            <div>
                <label htmlFor="">Username</label><br /> 
            <input onChange={(e)=>{
                console.log(e.target.value);
                setUsername(e.target.value);

            }} value={username} type="text" name="username"  />
            </div>
            <div>
            <label htmlFor="">Content</label><br /> 
            <textarea onChange={(e)=>handleonChangeContent(e)} value={content} name="content" />
            </div>
            <div>
            <label htmlFor="">Hidden</label><br />
            <input type="checkbox" onChange={(e)=>{
                console.log(e.target.checked);
                setIsHidden(!isHidden)
            }} checked={isHidden} name="hidden" value={1} />
            </div>
            <div>
            {courses.map(course => {
                return (
                <label key={course.id}>
                <input
                    type='checkbox'
                    checked={checked.includes(course.id)}
                    onChange={()=> handelCheck(course.id)}
                
                />
                {course.name}
                </label>
                )
            })}
            </div>
        </form>
        </>
    )
}