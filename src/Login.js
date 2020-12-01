import React , {useState} from 'react';
import "./Login.css"
import { Link , useHistory} from 'react-router-dom';
import { auth } from './Firebase';

function Login() {
    const history=useHistory(); 
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const signIn = (ev)=>{
        ev.preventDefault();
        //do the login 
        auth.signInWithEmailAndPassword(email,password)

        .then((auth)=>{
           
       // eslint-disable-next-line no-restricted-globals
            history.push('/');
        }
        )
        .catch((ev)=>alert(ev.message));


    };

    const register = (e)=>{
        e.preventDefault();
        //do the register logic

        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            if(auth){
            // eslint-disable-next-line no-restricted-globals
           history.push("/");
        }
        })
        .catch((e) => alert(e.message));
    }
    return (
        <div className="login">
            <Link to="/">
                <img
                className="login__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/langfr-420px-Amazon_logo.svg.png"
                alt=""
                />
            
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                    
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
                    <button type="submit" onClick={signIn} className="login__signInButton"> Sign In</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button type="submit" onClick={register} className="login__registerButton">Create your amazon acount</button>
                     
                 

            </div>
            
        </div>
    )
}

export default Login;
