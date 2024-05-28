import signinLogo from "../assets/images/SigninLogo.svg";
const SigninHeader = ({ header, Paragraph }) => {
  return (
    <>
      <div className="text-center d-flex gap-3" style={{ paddingTop: "4rem" }}>
        <h2
          className=""
          style={{
            fontSize: "38px",
            fontWeight: "400",
            lineHeight: "48px",
            color: "#0A0E27",
          }}
        >
          {header}
        </h2>
        <img src={signinLogo} height="40" alt="Your Logo" />
      </div>
      <p
        style={{
          fontSize: "1rem",
          lineHeight: "1rem",
          fontWeight: "400",
          color: "#606569",
        }}
      >
        {Paragraph}
      </p>
    </>
  );
};

export default SigninHeader;
