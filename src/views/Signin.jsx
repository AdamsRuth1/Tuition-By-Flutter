import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SigninHeader from "../components/SigninHeader";
import Apple from "../assets/Icons/Apple-Icon.svg";
import Google from "../assets/Icons/Google-icon.svg";

const Signin = () => {
  return (
    <Container>
      <Row>
        <Col className="" style={{ paddingRight: "7.5rem" }}>
          <SigninHeader
            header="Welcome Back"
            Paragraph="Sign in to Tuition to continue"
          />
          <div className="d-grid gap-4 " style={{ paddingTop: "4rem" }}>
            <button
              className=" Google-border "
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

          
        </Col>
        {/* Sign in side content */}
        <Col>
          <div className="" style={{ backgroundColor: "red" }}>
            <p>fktfktdtydxtrfkcdty</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Signin;
