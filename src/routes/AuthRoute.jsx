import { Navigate, Outlet } from "react-router";
import Header from "../components/common/Header";
import { useAuth } from "../hooks/useAuth";

function AuthRoute() {
  const { auth } = useAuth();

  console.log(auth);

  if (!auth.user) return <Navigate to={"/login"} />;

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default AuthRoute;
