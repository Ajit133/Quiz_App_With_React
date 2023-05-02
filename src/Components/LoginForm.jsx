import Button from "./Button";
import Form from "./Form";
import TextInput from "./TextInput";

const LoginForm = () => {
    return (
        <Form style={{height:"330px"}} >
             <TextInput 
             type="text"
             placeholder="Enter Email"
             icon="alternate_email"
             required
             />
             <TextInput
              type="password"
              placeholder="Enter password"
              required />
              <Button>
               <span>Submit Now</span> 
              </Button>
              <div className="info">Do not have an account? <a href="signup.html">Signup</a> instead.</div>
        </Form>
    );
};

export default LoginForm;