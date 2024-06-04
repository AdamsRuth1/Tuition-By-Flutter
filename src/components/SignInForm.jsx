import { useState } from "react";
import eyeOpen from "../assets/Icons/eyeOpen.svg";
import eyeClose from "../assets/Icons/eyeClose.svg";
const SignInForm = () => {
  const [showpassword, setShowPassword] = useState(false);
  const handlePasswordVisibility = () => {
    setShowPassword(!showpassword);
  };
  return (
    <div className="">
      <div className="pb-4">
        <label>Email</label> <br />
        <input
          type="email"
          placeholder="Enter Email here"
          className="input-style"
          style={{ width: "480px", height: "48px" }}
        />
      </div>

      <div className="">
        <label>Password</label> <br />
        <input
          type={showpassword ? "text" : "password"}
          name="password"
          // value={state.password}
          placeholder="Enter email here"
          // onChange={handleChange}
          className={`input-style`}
          style={{ width: "480px", height: "48px" }}
        />
        <span
          className="eyeIcon"
          style={{
            // bottom: "0.5rem",
            // left: "35rem",
            cursor: "pointer",
            // position: "absolute",
          }}
          onClick={handlePasswordVisibility}
        >
          {showpassword ? (
            <img src={eyeOpen} alt="eye icon" />
          ) : (
            <img src={eyeClose} alt="eye icon" />
          )}
        </span>
      </div>
    </div>
  );
};

export default SignInForm;
