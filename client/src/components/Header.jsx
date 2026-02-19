import { useNavigate } from "react-router";

function Header() {
  const navigate = useNavigate();
  const handleClickToTerrorists =(e) => {
    navigate("/terrorists");
  };
  const handleClickToTest =(e) => {
    navigate("/test");
  };
  return (
    <header>
      <h1>test terrorists</h1>
      <nav>
        <button onClick={handleClickToTerrorists}>Terrorists</button>
        <button onClick={handleClickToTest}>Test</button>
      </nav>
    </header>
  );
}

export default Header;
