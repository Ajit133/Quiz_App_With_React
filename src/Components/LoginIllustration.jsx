import loginImage from '../assets/images/login.svg'
import classes from '../styles/Illustration.module.css'
const LoginIllustration = () => {
    return (
        <div className={classes.illustration}>
            <img src={loginImage} alt="Login" />
          </div>
    );
};

export default LoginIllustration;