import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import Illustration1 from "../assets/Illustrations for why cards (1).png";
import Illustration2 from "../assets/Illustrations for why cards (2).png";
import Illustration3 from "../assets/Illustrations for why cards.png";
import undraw1 from "../assets/undraw_safe_re_kiil 1.png";
function Usetuition (){
    return (
        <>
        <div className=" p-5 background-color" style={{marginTop: "156px"}}>
          <div className=" mb-5">
            <h1 className="text-color-blue secondary-fon background-color">
              Why Use <span className="text-color-red background-color">Tuition</span>{" "}
            </h1>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="text-center background-color" style={{ padding: "24px" }}>
                <img
                  whileHover={{ scale: 1.1 }}
                  src={undraw1}
                  alt="Illustration 1"
                  className="img-fluid mt-4 mt-lg-0 background-color"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <h6
                  style={{ marginTop: "24px" }}
                  className="text-color-blue fw-bold background-color"
                >
                  Fast and secure payments
                </h6>
                <p style={{ marginTop: "24px" }}>
                  Pay your tuition fees quickly and safely with our top-notch
                  security measures. Focus on your education, and leave the
                  payment worries to us.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-center" style={{ padding: "24px" }}>
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={Illustration3}
                  alt="Illustration 2"
                  className="img-fluid mt-4 mt-lg-0"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <h6
                  style={{ marginTop: "24px" }}
                  className="text-color-blue fw-bold"
                >
                  Multiple payment options
                </h6>
                <p style={{ marginTop: "24px" }}>
                  With our multiple payment options - bank transfers, card
                  payments, direct account debits etc., you can conveniently pay
                  fees to high schools, colleges and universities within Africa
                  and across the globe using your local currency.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-center" style={{ padding: "24px" }}>
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={Illustration2}
                  alt="Illustration 2"
                  className="img-fluid mt-4 mt-lg-0"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <h6
                  style={{ marginTop: "24px" }}
                  className="text-color-blue fw-bold"
                >
                  Affordable pricing
                </h6>
                <p style={{ marginTop: "24px" }}>
                  Our fees are competitive, helping you save money while paying
                  your tuition.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-center" style={{ padding: "24px" }}>
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={undraw1}
                  alt="Illustration 3"
                  className="img-fluid mt-4 mt-lg-0"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <h6
                  style={{ marginTop: "24px" }}
                  className="text-color-blue fw-bold"
                >
                  Real-time support
                </h6>
                <p style={{ marginTop: "24px" }}>
                  Our fees are competitive, helping you save money while paying
                  your tuition.
                </p>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}
export default Usetuition;