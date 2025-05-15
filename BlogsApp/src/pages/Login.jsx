
import { useState } from "react";
import '../css/login.css';



const Login = ()=> {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState("");

    console.log(userName, password);

    // const handleUserName = (e)=> {

    //     setUserName(e.currentTarget.value);
    // }

    return (
        <div className="loginContainer">
            <h1>Login</h1>

            <form action="" className="loginForm">
                <div className="loginData">
                    <label htmlFor="userName">UserName</label>
                    <input type="userName" name="userName" value={userName} onChange={(e)=>{setUserName(e.currentTarget.value)}} />
                </div>

                <div className="loginData">
                    <label htmlFor="pswd">Password</label>
                    <input type="password" name="pswd" value={password} onChange={(e)=>{setPassword(e.currentTarget.value)}} />
                </div>
                <button>Login</button>
            </form>
        </div>


    )

}
export default Login;