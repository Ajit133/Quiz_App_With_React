import classes from '../styles/Answers.module.css'
import CheckBox from './CheckBox'
function Answers() {
    return (
        <>
         <div className={classes.answers} >
            <CheckBox className={classes.answer} text="A New Hope1" /> 
         </div>
        </>
    );
}

export default Answers;