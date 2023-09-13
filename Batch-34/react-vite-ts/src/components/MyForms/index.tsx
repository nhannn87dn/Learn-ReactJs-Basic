import React from 'react'

const MyForms = ()=>{

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleOnChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) =>{
        console.log(event.target.value);
        setUsername(event.target.value)
    }

    const handleOnChangePassword = (event: React.ChangeEvent<HTMLInputElement>) =>{
        console.log(event.target.value);
        setPassword(event.target.value)
    }

    return (
        <>
        <form onSubmit={(e: React.FormEvent<HTMLFormElement>)=>{
            e.preventDefault();
            console.log('Form da submited');
        }}>
            <input value={username} onChange={handleOnChangeUsername} name='username' placeholder='Username' />
            <input value={password} onChange={handleOnChangePassword} name='password' placeholder='password' />
            <button type='submit'>Submit</button>
        </form>
        </>
    )
}


export default MyForms