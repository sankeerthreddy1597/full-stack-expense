import { useState, useEffect } from "react";
import axios from "axios";
import "./PrivateScreen.css";

import TopNavBar from "../../components/TopNavBar/TopNavBar";
import HomeScreen from "../HomeScreen/HomeScreen";

const PrivateScreen = ({ history }) => {
  const [error, setError] = useState("");
  // const [privateData, setPrivateDate] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      history.push("/login");
    }

    const fetchPrivateData = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/api/private", config);
        //setPrivateDate(data.data);
        setUsername(data.userData.username);
        setEmail(data.userData.email);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not Authorized, please login");
      }
    };
    fetchPrivateData();
  });

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    history.push("/login");
  };

  return error ? (
    <span className="error-message">{error}</span>
  ) : (
    // <div className="private-screen">
    //   <TopNavBar />
    //   <div className="private-screen__topBar">{privateData}</div>
    //   <div className="private-screen__welcomeSection">
    //     <h1>{username}</h1>
    //     <h3>{email}</h3>
    //     <button onClick={logoutHandler} className="btn btn-primary">
    //       Logout
    //     </button>
    //   </div>
    // </div>
    <>
      <TopNavBar
        username={username}
        email={email}
        history={history}
        onLogout={logoutHandler}
      />
      <HomeScreen />
    </>
  );
};

export default PrivateScreen;
