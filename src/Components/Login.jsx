import LoginForm from "./LoginForm";
import LoginIllustration from "./LoginIllustration";
const Login = () => {
    return (
        <>
            <h1>Login to your account</h1>
            <div className="column">
                <LoginIllustration />
                <LoginForm />
                
            </div>
        </>
    );
};

export default Login;