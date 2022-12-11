import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase";
import { useNavigate } from "react-router-dom";


function Authenticate() {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const emailHandler = (ev) => {
        setEmail(ev.target.value);
    }
    
    useEffect(()=>{
        if(token){
            navigate("/giphy");
        }
    }, []);
    const passwordHandler = (ev) => {
        setPassword(ev.target.value);
    }

    const clickHandler = (ev) => {
        ev.preventDefault();
        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                if(user){
                    alert("Successfully signed in...");
                    localStorage.setItem("token", JSON.stringify(user.stsTokenManager.accessToken));
                    navigate("/giphy");
                }
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
                return errorCode;
            });
    }


    return (
        <div className="header">
            <form onSubmit={clickHandler}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input 
                    type="email" 
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter email" 
                    onChange={emailHandler}        
                    value={email}
                />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input 
                    type="password" 
                    className="form-control" 
                    id="exampleInputPassword1" 
                    placeholder="Password"
                    onChange={passwordHandler}        
                    value={password}
                />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Authenticate;