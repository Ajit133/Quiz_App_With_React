import classes from '../styles/Form.module.css'
// eslint-disable-next-line react/prop-types
function Form({children,className,...rest}) {
    return (
        <form className={` ${className} ${classes.form}`} {...rest}>
           {children}
        </form>
    );
}

export default Form;