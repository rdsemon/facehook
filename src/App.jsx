import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotfoundPage from "./pages/NotfoundPage";
import ProfilePage from "./pages/ProfilePage";
import RegistrationPage from "./pages/RegistrationPage";
import AuthRoute from "./routes/AuthRoute";
function App() {
  return (
    <>
      <Routes>
        <Route element={<AuthRoute />}>
          <Route element={<HomePage />} path="/" />
          <Route element={<ProfilePage />} path="/me" />
        </Route>
        <Route element={<LoginPage />} path="/login" />
        <Route element={<RegistrationPage />} path="/register" />
        <Route element={<NotfoundPage />} path="*" />
      </Routes>
    </>
  );
}

export default App;
