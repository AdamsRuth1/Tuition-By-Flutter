// import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
function SafteySecurity() {
    return(
        <>
         <Container fluid style={{ marginTop: "9%" }}>
          <div className="row background-color p-5">
            <div className="text-center">
              <h1
                style={{ marginBottom: "72px", marginTop: "128px" }}
                className="secondary-font text-color-blue fw-bold"
              >
                Safety and security guaranteed
              </h1>
              <p>
                At Flutterwave, we take security seriously, so every payment
                made on our platform is 100% secure, even exceeding industry
                standards.
              </p>
            </div>

            <div
              className="col-md-6 mb-4 mb-md-0 pl-md-0"
              style={{
                marginTop: "56px",
                paddingRight: "136px",
                paddingLeft: "100px",
              }}
            >
              <h3 className="text-color-blue secondary-font fw-bold">
                ISO Certification
              </h3>
              <h6 className="fs my-4">
                Our ISO 27001 & 22301 certification means that we have
                acceptable business practices and processes, including a robust
                business continuity plan.
              </h6>
            </div>
            <div
              className="col-md-6 mb-4 mb-md-0"
              style={{ marginTop: "56px" }}
            >
              <h3 className="text-color-blue secondary-font fw-bold">
                PA DSS & PCI DSS Compliant
              </h3>
              <h6 className="fs my-4">
                This certification is proof that Flutterwave as a payment
                gateway processor, has satisfied the highest level of Security
                Audit and authorizations.
              </h6>
            </div>
          </div>
        </Container>
        </>
    )
}
export default SafteySecurity;