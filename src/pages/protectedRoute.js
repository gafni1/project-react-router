import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children, user}) => {
  if (!user) {
    console.log("משתמש לא קיים");
    return <Navigate to='/' />
  }
    return children; 
}

export default ProtectedRoute;
