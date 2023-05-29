import { Outlet,Navigate } from "react-router-dom";
import useAuth from "../contexts/AuthContext";
// eslint-disable-next-line react/prop-types
function PublicRoute() {
    const {currentUser} = useAuth();

    return !currentUser?<Outlet/>:<Navigate to='/' />
        
}

export default PublicRoute;