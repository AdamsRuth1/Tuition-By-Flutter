import Google from "../assets/Icons/Google-icon.svg";

const SignupForm = () => {
  return (
    <form>
      <label>Email</label> <br />
      <input
        type="email"
        placeholder="Enter Email here"
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
            placeholder="Enter your first name"
            className="input-style"
            style={{ width: "228px", height: "48px" }}
          />
        </div>
      </div>
      <div style={{ paddingBottom: "1.5rem" }}>
        <label>Password</label> <br />
        <input
          type="password"
          placeholder="Enter email here"
          className="input-style"
          style={{ width: "480px", height: "48px" }}
        />
      </div>
      <div style={{ paddingBottom: "2rem" }}>
        <label> Phone Number</label> <br />
        <select
          name="Nigeria"
          style={{ width: "124px", height: "48px" }}
          className="select"
        >
          <option value="Nigeria">
            Nigeria
            {/* <img src={Google} alt="" /> */}
          </option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
        </select>
        <input
          className="input-style"
          type="number"
          name=""
          id=""
          style={{ height: "48px", width: "356px" }}
        />
      </div>
    </form>
  );
};

export default SignupForm;
