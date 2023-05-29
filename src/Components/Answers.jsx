import classes from "../styles/Answers.module.css";
import CheckBox from "./CheckBox";
function Answers({ options = [], handleChange }) {
  return (
    <>
      <div className={classes.answers}>
        {options.map((option, index) => (
          // eslint-disable-next-line react/jsx-key
          <CheckBox
            className={classes.answer}
            text={option.title}
            value={index}
            checked={option.checked}
            onChange={(e) => handleChange(e, index)}
          />
        ))}
      </div>
    </>
  );
}

export default Answers;
