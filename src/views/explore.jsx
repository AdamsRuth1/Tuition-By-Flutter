import "bootstrap/dist/css/bootstrap.min.css";
import Mock1 from "../assets/Mockup & Blob 1.png";
import Mock2 from "../assets/Mockup & Blob 2.png";
import Mock3 from "../assets/Mockup and Blob 3.png";
import Mock4 from "../assets/Frame 327.png";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { Button, Container } from "react-bootstrap";

function Explore() {
    return(
        <>
         <Container className="">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="row"
          >
            <div
              className="text-center"
              style={{ marginTop: "128px", marginBottom: "222px" }}
            >
              <h1 className="text-color-blue secondary-font fw-bold header-fs fs-1">
                Explore New Features
              </h1>
              <p className="fw-lighter fs-0">
                Tailored to improve your experience. Worry less! Study More!!
              </p>
            </div>
            <div
              className="col-md-6 text-center"
              style={{ textAlign: "center" }}
            >
              <img
                src={Mock1}
                alt="Header Image"
                className="img-fluid "
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
            <div
              className="col-md-6 mb-4 mb-md-0 "
              style={{ textAlign: "left", paddingLeft: "126px" }}
            >
              <h1 className="text-color-blue secondary-font fw-bold">
                Digital Wallet
              </h1>
              <h6 className="fs my-4">
                This isn't just a wallet; it's your launchpad to a smoother
                ‘study abroad’ experience. Forget the stress of accessing money
                in a new country, our Digital Wallet lets you hit the ground
                running, so you worry less about getting access to spendable
                money and focus on what truly matters: immersing yourself in the
                culture and excelling in your studies.
              </h6>
              <Button className="sign-in me-4">
                Enroll your institution <FiArrowRight />
              </Button>
            </div>
          </motion.div>
        </Container>

        <Container className="" style={{ marginTop: "240px" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="row"
          >
            <div
              className="col-md-6 mb-4 mb-md-0 "
              style={{ textAlign: "left" }}
            >
              <h1 className="text-color-blue secondary-font fw-bold">
                Target Savings
              </h1>
              <h6 className="fs my-4">
                We understand that achieving your dream of studying abroad comes
                with its own set of challenges, especially when it comes to
                managing finances in the face of inflation and unstable exchange
                rates.
                <br />
                <br />
                That's why we've launched our new Target Savings feature – a
                flexible and empathetic solution designed to help you save
                towards your educational goals in a stress-free manner.
              </h6>
              <Button className="sign-in me-4">
                Explore Savings <FiArrowRight />
              </Button>
            </div>
            <div
              className="col-md-6 text-center"
              style={{ textAlign: "center", paddingLeft: "126px" }}
            >
              <motion.img
                src={Mock2}
                alt="Header Image"
                className="img-fluid "
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </motion.div>
        </Container>

        <Container className="" style={{ marginTop: "240px" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="row"
          >
            <div
              className="col-md-6 text-center"
            >
              <img
                src={Mock3}
                alt="Mock3"
                className="img-fluid "
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
            <div
              className="col-md-6 mb-4 mb-md-0 "
              style={{ textAlign: "left", paddingLeft: "126px" }}
            >
              <h1 className="text-color-blue secondary-font fw-bold">
                Informative Blog
              </h1>
              <h6 className="fs my-4">
                We get it. Studying abroad sounds incredible, but the journey
                can feel overwhelming. Sifting through countless websites,
                unsure which are reliable and which are scams, can leave you
                feeling lost.
                <br />
                <br />
                The Tuition by Flutterwave Blog is your one-stop source for
                reliable information, from school applications to securing your
                dream scholarship and preparing for your journey. <br /> <br />
                Explore our Blog today and take the first step towards a
                brighter future with our empathetic and reliable guidance –
                because we believe in making your dreams a reality, one post at
                a time.
              </h6>
              <Button className="sign-in me-4">
                Explore Blog <FiArrowRight />
              </Button>
            </div>
          </motion.div>
        </Container>
        <Container className="" style={{ marginTop: "240px" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="row"
          >
            <div
              className="col-md-6 mb-4 mb-md-0 "
              style={{ textAlign: "left" }}
            >
              <h1 className="text-color-blue secondary-font fw-bold">
                Pay Online Courses
              </h1>
              <h6 className="fs my-4">
                Whether you're sharpening your professional skills on Udemy, or
                delving deep into fascinating topics on Coursera, we got you
                covered. We offer different payment pathways specifically
                designed for you, ensuring a smooth and stress-free learning
                experience.
                <br /> <br />
                We're committed to creating pathways that empower you to achieve
                your educational goals, regardless of where you are.
              </h6>
              <Button className="sign-in me-4">
                Explore Payments <FiArrowRight />
              </Button>
            </div>
            <div
              className="col-md-6 text-center"
              style={{ textAlign: "center", paddingLeft: "126px" }}
            >
              <motion.img
                src={Mock4}
                alt="Header Image"
                className="img-fluid "
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </motion.div>
        </Container>
        </>
    )
}
export default Explore;