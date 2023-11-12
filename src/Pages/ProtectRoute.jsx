import { Outlet, Navigate } from 'react-router-dom';
import { useUserContext } from '../Store/UserContext';

// wrap around logged-in user only routes to protect them
function ProtectedRoute({ redirectPath = '/', children }) {
  const { currentUser } = useUserContext();

  if (!currentUser.email) {
    return <Navigate to={redirectPath} replace />;
  }
  // works for both nested and standalone routes
  return children ? children : <Outlet />;
}
export default ProtectedRoute;
