import Google from "../assets/Icons/Google-icon.svg";
import Apple from "../assets/Icons/Apple-Icon.svg";

const SignInWithGoogle = ({ HandleGoogleSignIn, HandleAppleSignIn }) => {
  return (
    <>
      <div className="d-grid gap-4 " style={{ paddingTop: "4rem" }}>
        <button
          onClick={HandleGoogleSignIn}
          className=" Google-border"
          style={{
            width: "480px",
            height: "48px",
            gap: "0.62rem",
          }}
        >
          <img
            src={Google}
            alt="Google icon"
            style={{ paddingRight: "0.62rem" }}
          />
          Continue with Google
        </button>

        <button
          onClick={HandleAppleSignIn}
          className=" Google-border"
          style={{
            width: "480px",
            height: "48px",
          }}
        >
          <img
            src={Apple}
            alt="Apple icon"
            style={{ paddingRight: "0.62rem" }}
          />
          Continue with Apple
        </button>
      </div>
      <div
        className="d-flex pt-5  text-center pb-3"
        style={{ color: "#606569" }}
      >
        <hr></hr>
        <div className="line" style={{ width: "215px", height: "0" }}></div>
        <span className="text-center pe-3 ps-3">Or</span>
        <div className="line" style={{ width: "215px", height: "0" }}></div>
      </div>
    </>
  );
};

export default SignInWithGoogle;
