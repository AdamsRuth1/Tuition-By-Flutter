import SignInHeader from "../components/SigninHeader";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormSides from "../components/FormSides";
import SignupForm from "../components/SignupForm";

import ButtonBotton from "../components/ButtonBotton";
// import SignupData from "../constants/signupData.jsx";

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
