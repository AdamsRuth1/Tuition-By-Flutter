import Google from "../assets/Icons/Google-icon.svg";
import Nigeria from "../assets/Icons/Nigeria.svg";
import Arrow from "../assets/Icons/Arrrow-down.svg";
import { useState } from "react";

const SignupForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [countryNumber, setCountryNumber] = useState(+234);

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

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleClick = (option) => {
    setSelected(option);
    setCountryNumber(option.value);
    setIsOpen(false);
  };

  return (
    <form>
      <div className="" style={{ paddingTop: "3rem" }}>
        <label>Email</label> <br />
        <input
          type="email"
          placeholder="Enter email address"
          className="input-style"
          style={{ width: "480px", height: "48px" }}
        />
        <div
          className="d-flex gap-4"
          style={{ paddingTop: "1.5rem", paddingBottom: "1.5rem" }}
        >
          <div>
            <label> First name</label>
            <br />
            <input
              type="text"
              placeholder="Enter your first name"
              style={{ width: "228px", height: "48px" }}
              className="input-style"
            />
          </div>
          <div>
            <label> First name</label>
            <br />
            <input
              type="text"
              placeholder="Enter your last name"
              className="input-style"
              style={{ width: "228px", height: "48px" }}
            />
          </div>
        </div>
        <div></div>
        <div style={{ paddingBottom: "1.5rem" }} className="">
          <label>Password</label> <br />
          <input
            type="password"
            placeholder="Enter email here"
            className="input-style"
            style={{ width: "480px", height: "48px" }}
          />
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
                    <img src={Nigeria} alt="" />
                  )}
                  <div>
                    <img src={Arrow} alt="" />
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
    </form>
  );
};

export default SignupForm;
