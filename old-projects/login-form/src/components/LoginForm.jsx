import {useState} from 'react';
import './LoginForm.css';

export function LoginForm() {

        const [showPassword,setshowPassword] = useState(false);

        function viewPassword(){
          if(showPassword) {
            setshowPassword(false);
          }else{
            setshowPassword(true);
          }
        }

        return(
          <>
          <div>
          <input placeholder="Email" className="input-details"/>
          </div>
        <div>
          <input 
          placeholder= "Password" 
          type={showPassword ? 'password' : 'text' }className="input-details"/>

          <button className="show-password"
          onClick= {viewPassword}
          >Show Password</button>
          </div>
          
        <button className="login-button">Login</button>
        <button className="signup-button">Sign Up</button>
          </>
        )}