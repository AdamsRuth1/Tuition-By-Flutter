import Google from "../assets/Icons/Google-icon.svg";
import Nigeria from "../assets/Icons/Nigeria.svg";
import Arrow from "../assets/Icons/Arrrow-down.svg";
import eyeOpen from "../assets/Icons/eyeOpen.svg";
import eyeClose from "../assets/Icons/eyeClose.svg";
import Button from "../components/Button";
import { Error } from "../constants/ErrorMessage";
import { useState } from "react";

const SignupForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [showpassword, setShowPassword] = useState(false);
  const [countryNumber, setCountryNumber] = useState(+234);
  const [state, setState] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });

  const validateEmail = (value) =>
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(value);
  const validateName = (value) => /^[a-zA-Z\-']{3,}$/.test(value.trim());
  const validatePassword = (value) =>
    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])[a-zA-Z._\=\:\*\&\^\%\$\@\#\/-\w]{8,}$/.test(
      value
    );

  const handleChange = (event) => {
    const { name, value } = event.target;
    const isValid =
      name === "email"
        ? validateEmail(value)
        : name === "firstName" || name === "lastName"
        ? validateName(value)
        : name === "password"
        ? validatePassword(value)
        : true;

    setErrorMessage((prev) => ({
      ...prev,
      [name]: isValid ? "" : Error[name],
    }));
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const options = [
    {
      value: +264,
      image: Google,
    },
    {
      value: +234,
      image: Nigeria,
    },
    {
      value: +222,
      image: Google,
    },
  ];
  const handlePasswordVisibility = () => {
    setShowPassword(!showpassword);
  };
  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleClick = (option) => {
    setSelected(option);
    setCountryNumber(option.value);
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(errorMessage.email);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="" style={{ paddingTop: "3rem" }}>
        <label>Email</label> <br />
        <input
          type="email"
          name="email"
          value={state.email}
          placeholder="Enter email here"
          onChange={handleChange}
          className={`input-style ${errorMessage.email ? "border-danger" : ""}`}
          style={{ width: "480px", height: "48px" }}
        />
        <div
          className="d-flex gap-4"
          style={{ paddingTop: "1.5rem", paddingBottom: "1.5rem" }}
        >
          <div>
            <label>First Name</label>
            <br />
            <input
              type="text"
              name="firstName"
              value={state.firstName}
              placeholder="Enter First Name here"
              onChange={handleChange}
              style={{ width: "228px", height: "48px" }}
              className={`input-style ${
                errorMessage.firstName ? "border-danger" : ""
              }`}
            />
          </div>
          <div>
            <label> Last name</label>
            <br />
            <input
              type="text"
              name="lastName"
              value={state.lastName}
              placeholder="Enter your last name"
              onChange={handleChange}
              className={`input-style ${
                errorMessage.lastName ? "border-danger" : ""
              }`}
              style={{ width: "228px", height: "48px" }}
            />
          </div>
        </div>
        <div style={{}} className="">
          <label>Password</label> <br />
          <input
            type={showpassword ? "text" : "password"}
            name="password"
            value={state.password}
            placeholder="Choose your password"
            onChange={handleChange}
            className={`input-style ${
              errorMessage.password ? "border-danger" : ""
            }`}
            style={{ width: "480px", height: "48px" }}
          />
          <p className="text-danger" style={{ fontSize: "14px" }}>
            {errorMessage.password}
          </p>
          <span
            className=""
            style={{
              bottom: "7.6rem",
              left: "35rem",

              cursor: "pointer",
              position: "absolute",
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

        
        <div style={{ paddingBottom: "0.7rem" }}>
          <label> Phone Number</label> <br />
          <div className="d-flex">
            <div
              style={{
                position: "absolute",
              }}
            >
              <div>
                <div
                  onClick={toggleDropdown}
                  className="d-flex gap-5 px-3"
                  style={{
                    paddingTop: "10.8px",
                    paddingBottom: "10.8px",
                    border: "1px solid #CCCCCC",
                  }}
                >
                  {selected ? (
                    <>
                      <img src={selected.image} alt={selected.label} />
                    </>
                  ) : (
                    <img src={Nigeria} alt="Nigeria Flag" />
                  )}
                  <div>
                    <img src={Arrow} alt="Arrow down icon" />
                  </div>
                </div>
                {isOpen && (
                  <ul style={{ border: "none" }}>
                    {options.map((option) => (
                      <li
                        style={{ border: "none" }}
                        key={option.value}
                        onClick={() => handleClick(option)}
                      >
                        <img src={option.image} alt={option.label} />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <input
              className="input-style"
              type="number"
              name=""
              value={countryNumber}
              onChange={(e) => setCountryNumber(e.target.value)}
              style={{ height: "48px", width: "480px", paddingLeft: "9rem" }}
            />
          </div>
        </div>
      </div>
      <Button text="Sign Up" />
    </form>
  );
};
export default SignupForm;
