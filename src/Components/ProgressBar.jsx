import { Link } from 'react-router-dom';
import classes from '../styles/Progressbar.module.css'
import Button from './Button';
function ProgressBar({next,prev,progress,submit}) {
    return (
        <>
         <div className={classes.progressBar}>
          <div className={classes.backButton} onClick={prev}>
            <span className="material-icons-outlined"> arrow_back </span>
          </div>
          <div className={classes.rangeArea}>
            <div className={classes.tooltip}>{progress}% Complete!</div>
            <div className={classes.rangeBody}>
              <div className={classes.progress} style={{width: `${progress}%`}}></div>
            </div>
          </div>
          
            <Button className={classes.next} onClick={ progress === 100 ? submit : next } >
            <span>{progress === 100 ? "Submit Quiz":"Next Question"}</span>
              <span className="material-icons-outlined"> arrow_forward </span>
            </Button>
          
        </div>
        </>
    );
}

export default ProgressBar;