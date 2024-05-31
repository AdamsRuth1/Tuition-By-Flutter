import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SigninHeader from "../components/SigninHeader";
import SignInWithGoogle from "../components/SignInWithGoogle";
import SignInForm from "../components/SignInForm";
import Button from "../components/Button";
import FormSides from "../components/FormSides";
import ButtonBotton from "../components/ButtonBotton";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <Container>
      <Row>
        <Col className="">
          <SigninHeader
            header="Welcome Back"
            Paragraph="Sign in to Tuition to continue"
          />
          <SignInWithGoogle
          // HandleAppleSignIn={}
          // HandleGoogleSignIn={}
          />
          <SignInForm />
          <Link
            to="/forgotpassword"
            style={{
              fontWeight: "400",
              fontSize: "1rem",
              lineHeight: "1rem",
              color: "#606569",
              paddingBottom: "2rem",
            }}
          >
            Forget password?
          </Link>
          <Button text="Sign In" />
          <ButtonBotton
            text="Don’t have an account? "
            navigate="Sign up"
            to="/signup"
            footerText="Sign in"
          />
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
