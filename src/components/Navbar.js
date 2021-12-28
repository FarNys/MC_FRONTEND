import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { selectLogin, setLogout, selectusername } from "../features/userSlice";
import { useHistory } from "react-router";

const Navbar = () => {
  const userName = useSelector(selectusername);
  const dispatch = useDispatch();
  const [isOpen, setisOpen] = useState(false);

  //IS LOGIN WILL CHANGED TO TRUE AFTER LOGIN AND CENTER NAVBAR WILL APEAR
  const isLogin = useSelector(selectLogin);
  // console.log(isLogin);
  const history = useHistory();
  // useEffect(()=>{

  // },[])
  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(
      setLogout({
        username: false,
        isLogin: false,
        email: null,
      })
    );
    localStorage.removeItem("token");
    history.push("/");
  };
  return (
    <div className="navbar_parent">
      {isLogin && (
        <div className="welcome_container">
          Welcome <span>{userName}</span>
        </div>
      )}
      <div className="navbar_container">
        <div className="nav_left">
          <Link to="/">Home</Link>
        </div>
        {isLogin && (
          <div className="nav_center">
            {/* <li>
            <Link to="/">Home</Link>
          </li> */}
            <li>
              <Link to="/create">Create</Link>
            </li>
            <li>
              <Link to="/allcards">All Cards</Link>
            </li>
            <li>
              <Link to="/wishlist">Wishlist</Link>
            </li>
          </div>
        )}

        <div className="nav_right">
          <li>
            {isLogin ? (
              <div className="user_logout">
                <button onClick={logoutHandler}>Log out</button>
              </div>
            ) : (
              <Link to="/register">Register</Link>
            )}
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
