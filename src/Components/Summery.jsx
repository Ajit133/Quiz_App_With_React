import classes from '../styles/Summery.module.css'
import success from '../assets/images/success.png'
function Summery() {
    return (
        <>
            <div className={classes.summary}>
          <div className={classes.point}>
            <p className={classes.score}>
              Your score is <br />
              5 out of 10
            </p>
          </div>

          <div className={classes.badge}>
            <img src={success} alt="Success" />
          </div>
        </div>
        </>
    );
}

export default Summery;