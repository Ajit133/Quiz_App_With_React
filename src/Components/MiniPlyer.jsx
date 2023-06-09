import classes from '../styles/MiniPlyer.module.css'
import image from '../assets/images/programmer.png'
function MiniPlyer() {
    return (
        <div className={` ${classes.miniPlayer} ${classes.floatingBtn} `}>
          <span className={`material-icons-outlined ${classes.open}`}> play_circle_filled </span>
          <span className={`material-icons-outlined ${classes.close}`}> close </span>
          <img src={image} alt="Video" />
          <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        </div>
    );
}

export default MiniPlyer;