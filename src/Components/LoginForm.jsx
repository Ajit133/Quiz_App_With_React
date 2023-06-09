import Form from './Form';
import TextInput from './TextInput';
import useAuth from '../contexts/AuthContext';
import Button from './Button';
import { Link,useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LoginForm = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState();
    const [loading,setLoading] = useState();

    const {login} = useAuth();
    const Navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();
        try{
            setError("");
            setLoading(true);
            await login(email,password);
            Navigate("/");
        }catch(err){
            setLoading(false);
            setError("Failed to login!");
        }
    }
      

    return (
        <>
            <Form style={{height:"330px"}} onSubmit={handleSubmit} >
             <TextInput 
             type="text"
             placeholder="Enter Email"
             icon="alternate_email"
             required
             value={email}
             onChange = {(e)=>setEmail(e.target.value)}
             />
             <TextInput
              type="password"
              placeholder="Enter password"
              required
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
               />
              <Button type="submit" disabled={loading}>
               <span>Submit Now</span> 
              </Button>
              {error && <p className="error">{error}</p>}
              <div className="info">Do not have an account? <Link to={"/singup"}>Signup</Link> instead.</div>
        </Form>
        </>
    );
};

export default LoginForm;