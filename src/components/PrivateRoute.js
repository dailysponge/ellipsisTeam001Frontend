import { useState, useContext, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  let LoggedInUser = null;
  const user = JSON.parse(localStorage.getItem('user'));
  const [render, setRender] = useState(false);
  useEffect(() => {
    setRender(true);
  }, []);

  if (user) {
    LoggedInUser = user;
  }
  const loaded = LoggedInUser ? <Outlet /> : <Navigate to="/" replace />;

  return render ? loaded : <></>;
};

export default PrivateRoute;
