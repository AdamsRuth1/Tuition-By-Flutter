import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SigninHeader from "../components/SigninHeader";
import Apple from "../assets/Icons/Apple-Icon.svg";
import Google from "../assets/Icons/Google-icon.svg";
import SignInForm from "../components/SignInForm";
import Button from "../components/Button";
import FormSides from "../components/FormSides";

const Signin = () => {
  return (
    <Container>
      <Row>
        <Col className="">
          <SigninHeader
            header="Welcome Back"
            Paragraph="Sign in to Tuition to continue"
          />
          <div className="d-grid gap-4 " style={{ paddingTop: "4rem" }}>
            <button
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

          <SignInForm />
          <p
            style={{
              fontWeight: "400",
              fontSize: "1rem",
              lineHeight: "1rem",
              color: "#606569",
              cursor: "pointer",
            }}
          >
            Forget password?
          </p>
          <Button text="Sign In" />
          <div className="text-center pt-3" style={{ paddingBottom: "2.5rem" }}>
            <p
              style={{
                fontWeight: "400",
                fontSize: "1rem",
                lineHeight: "1rem",
                color: "#606569",
              }}
            >
              Don't have an account?{" "}
              <span
                style={{
                  color: "#0A0E27",
                  fontWeight: "700",
                  cursor: "pointer",
                }}
              >
                Sign Up
              </span>
            </p>
          </div>
          <div
            style={{
              width: "29rem",
              height: "4.5rem",
              fontWeight: "400",
              fontSize: "0.875rem",
              lineHeight: "1.5rem",
              color: "#A1A4A8",
            }}
            className="text-center"
          >
            <p className="pb-5">
              By clicking “Sign in”, I acknowledge that I have read and do
              hereby accept the terms and conditions in the Flutterwave's
              <span style={{ textDecoration: "underline" }}>Term’s of Use</span>
              and
              <span style={{ textDecoration: "underline" }}>
                Privacy Policy
              </span>
            </p>
          </div>
        </Col>
        {/* Sign in side content */}
        <Col>
          <FormSides />
        </Col>
      </Row>
    </Container>
  );
};

export default Signin;
