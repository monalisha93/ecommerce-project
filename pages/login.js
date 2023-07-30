import React, { useState } from "react";
import { useStateContext } from "../context/StateContext";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

const Success = () => {
  const [showRegistration, setShowRegistration] = useState(false);
  const {
    setLoggedIn,
    isValidLogin,
    setUserId,
    setPassword,
    userId,
    password,
  } = useStateContext();

  const router = useRouter();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleRegister = (e) => {
    e.preventDefault(); // Prevent form submission

    // Check if the password and confirm password match
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    console.log("Registration data:");
    console.log("Username:", userId);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    console.log("Phone Number:", phoneNumber);
    toast.success("Registered Successfully");
    // Reset the input fields
    setUserId("");
    setPassword("");
    setConfirmPassword("");
    setPhoneNumber("");
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission

    if (isValidLogin) {
      // Set login flag in local storage
      localStorage.setItem("isLoggedIn", "true");
      router.push("/");

      // Set logged-in state in context
      setLoggedIn(true);

      // Reset the input fields
      setUserId("");
      setPassword("");

      // Redirect to protected route
    } else {
      // Handle invalid login credentials
      toast.error("Invalid login credentials");
    }
  };

  return (
    <div className="loginBox">
      {showRegistration ? (
        <div className="containerBox">
          <div className="logo">
            <img
              src="https://cdn-icons-png.flaticon.com/128/5768/5768517.png"
              style={{
                height: "80px",
                width: "80px",
              }}
            />{" "}
          </div>
          <form onSubmit={handleRegister}>
            <div className="input-field">
              <input
                type="text"
                className="input"
                placeholder="Username"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
              <i className="bx bx-user"></i>
            </div>
            <div className="input-field">
              <input
                type="password"
                className="input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i className="bx bx-lock-alt"></i>
            </div>
            <div className="input-field">
              <input
                type="password"
                className="input"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <i className="bx bx-lock-alt"></i>
            </div>
            <div className="input-field">
              <input
                type="number"
                className="input"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <i className="bx bx-lock-alt"></i>
            </div>
            <div>
              <button className="btn" type="submit">
                Register
              </button>
            </div>
          </form>
          <p className="reg-btn">
            Already have an account?{" "}
            <span className="reg" onClick={() => setShowRegistration(false)}>
              Login
            </span>{" "}
          </p>
        </div>
      ) : (
        <div className="containerBox">
          <div className="logo">
            <img
              src="https://cdn-icons-png.flaticon.com/128/5768/5768517.png"
              style={{
                height: "80px",
                width: "80px",
              }}
            />{" "}
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-field">
              <input
                type="text"
                className="input"
                placeholder="Username"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
              <i className="bx bx-user"></i>
            </div>
            <div className="input-field">
              <input
                type="password"
                className="input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i className="bx bx-lock-alt"></i>
            </div>
            <div>
              <button className="btn" type="submit">
                Submit
              </button>
            </div>
          </form>
          <p className="reg-btn">
            Don't have an account?{" "}
            <span className="reg" onClick={() => setShowRegistration(true)}>
              Register
            </span>{" "}
          </p>
        </div>
      )}
    </div>
  );
};

export default Success;
