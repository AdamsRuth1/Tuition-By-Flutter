import SignInHeader from "../components/SigninHeader";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormSides from "../components/FormSides";
import SignupForm from "../components/SignupForm";
import Button from "../components/Button";
import ButtonBotton from "../components/ButtonBotton";
const Signup = () => {
  const className = "signup-footer";
  return (
    <main>
      <Container>
        <Row>
          <Col>
            <SignInHeader
              header="Get Started"
              Paragraph="Over 1,000 users are already using Tuition to pay their fees abroad - join the easy way to pay!"
            />
            <SignupForm />
            <Button text="Sign Up" />
            <ButtonBotton
              text="Already have an account? "
              navigate="Sign In"
              to="/signin"
              footerText="Sign up"
              className={className}
            />
          </Col>
          <Col>
            <FormSides />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Signup;
