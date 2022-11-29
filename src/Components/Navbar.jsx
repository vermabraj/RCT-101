import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContextProvider";
import { ThemeContext } from "../Contexts/ThemeContextProvider";

export default function Navbar() {
  const { isAuth, logIn, logOut } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: theme === "dark" ? "grey" : "white",
        color: theme === "dark" ? "white" : "black"
      }}
    >
      <h6>IS USER AUTHENTICATED : {isAuth ? "YES" : "NO"}</h6>
      <div
        style={{
          display: "flex",
          margin: "0px",
          alignItems: "center"
        }}
      >
        <div>
          <form>
            <input placeholder="EMAIL" />
            <input placeholder="PASSWORD" />
          </form>
        </div>
        <div>
          <button disabled={isAuth} onClick={logIn}>
            Log-In
          </button>
        </div>
      </div>
      <button disabled={!isAuth} onClick={logOut}>
        Log-Out
      </button>
    </div>
  );
}
