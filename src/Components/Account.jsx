import classes from '../styles/Account.module.css'
import { Link } from 'react-router-dom';
import useAuth from '../contexts/AuthContext';
function Account() {
  const {currentUser,logOut} = useAuth();
    return (
        <div className={classes.account}>
        {currentUser?(
          <>
          <span className="material-icons-outlined" title="Account">
          account_circle
          </span>
          <span>{currentUser.displayName}</span>
          <span className="material-icons-outlined" title="Logout" onClick={logOut}> logout </span>
          </>
        ):(
          <>
          <Link to="/singup">Signup</Link>
          <Link to="/login">Login</Link>
          </>
          
        )}
        
      </div>   
        
    );
}

export default Account;