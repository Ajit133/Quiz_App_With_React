import Illustration from "./Illustration";
import Form from "./Form";
import classes from '../styles/Singup.module.css'
import TextInput from "./TextInput";
import CheckBox from "./CheckBox";
import Button from "./Button";
function SingUp() {
    return (
        <>
            <h1>Create an account</h1>
            <div className="column">
            <Illustration />
            <Form className={`${classes.singup}`} >
            <TextInput type="text" 
            placeholder="Enter Name" 
            icon="person" /> 

            <TextInput type="text" 
            placeholder="Enter Email" 
            icon="alternate_email" /> 

            <TextInput type="password" 
            placeholder="Enter password" 
            icon="lock" />

            <TextInput type="password" 
            placeholder="Confirm password" 
            icon="lock_clock" />
            <CheckBox text="I agree to the Terms & Conditions"  />
            <Button >Submit Now</Button>
            
            <div className="info">
              Already have an account? <a href="login.html">Login</a> instead.
            </div>
            </Form>
            </div>
        </>
    );
}

export default SingUp;