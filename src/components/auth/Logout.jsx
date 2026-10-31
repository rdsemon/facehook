import { useNavigate } from "react-router";
function Logout() {
  const navigate = useNavigate();
  const handleLogOut = () => {
    navigate("/login");
  };
  return (
    <button className="icon-btn" onClick={handleLogOut}>
      <img src="./assets/icons/logout.svg" alt="Logout" />
    </button>
  );
}

export default Logout;
