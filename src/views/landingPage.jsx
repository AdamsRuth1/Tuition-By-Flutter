"bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import Header from "../components/header";
import heroImage from "../assets/Hero Images.png"; // Adjust the path as needed
// import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
// import Illustration1 from "../assets/Illustrations for why cards (1).png";
import Illustration2 from "../assets/Illustrations for why cards (2).png";
import Illustration3 from "../assets/Illustrations for why cards.png";
import undraw1 from "../assets/undraw_safe_re_kiil 1.png";
import harvardLogo from "../assets/harvard_university_logo.svg.png";
import udemyLogo from "../assets/udemy_logo.svg.png";
import cambridgeLogo from "../assets/cambridge_university_press__assessment_logo.png.png";
import { FiArrowRight } from "react-icons/fi";
import Standford from "../assets/Group.png";
import Coursera from "../assets/coursera_logo.svg (1).png";
import Altschool from "../assets/altcareer_logo.png.png";
import Ielts from "../assets/ielts_online_tests_logo.svg.png";
import CityLogo from "../assets/the_city_university_of_new_york_logo.svg.png";
import Avatar from "../assets/Avatars.png";
import Mock1 from "../assets/Mockup & Blob 1.png";
import Mock2 from "../assets/Mockup & Blob 2.png";
import Mock3 from "../assets/Mockup and Blob 3.png";
import Mock4 from "../assets/Frame 327.png";
import Step1 from "../assets/Number1 container.png";
import Step2 from "../assets/Number container2.png";
import Step3 from "../assets/Number container (1).png";
import Step4 from "../assets/Number container (2).png";
import Download from "../assets/Download mobile app section.png";

export default function LandingPage() {
  return (
    <>
      {/* <Helmet>
        <title>Your Page Title</title>
        {/* Add other meta tags, etc. */}
      {/* </Helmet> */}
      <div>
        <Header />

        <Container style={{ marginTop: "9%" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="row"
          >
            <div
              className="col-md-6 mb-4 mb-md-0 background"
              style={{ marginTop: "70px", textAlign: "left" }}
            >
              <h1 className="text-color-blue secondary-font header-fs">
                Empowering
                <br /> Dreams, Bridging <br />
                <span className="text-color-red">Borders.</span>
              </h1>
              <h6 className="fs my-4">
                Your Passport to Global Education! Fulfill your dreams
                effortlessly as we streamline the process for you. Focus on your
                aspirations – we'll handle the rest!
              </h6>
              <Button className="sign-in me-4">Get started</Button>
              <Button
                variant="light"
                className="btn outline-primary me-4 text-blue"
              >
                Enroll your institution
              </Button>
            </div>
            <div
              className="col-md-6 text-center"
              style={{ textAlign: "center" }}
            >
              <img
                src={heroImage}
                alt="Header Image"
                className="img-fluid background"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </motion.div>
        </Container>
        <div className=" p-5 background-color">
          <div className=" mb-5">
            <h1 className="text-color-blue secondary-font">
              Why Use <span className="text-color-red">Tuition</span>{" "}
            </h1>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="text-center" style={{ padding: "24px" }}>
                <img
                  whileHover={{ scale: 1.1 }}
                  src={undraw1}
                  alt="Illustration 1"
                  className="img-fluid mt-4 mt-lg-0"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <h6
                  style={{ marginTop: "24px" }}
                  className="text-color-blue fw-bold"
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

        <div className="my-5 p-5 ">
          <div className="text-center mb-5">
            <h1 className="text-color-blue secondary-font">
              Over 10k + tuition paid
            </h1>
            <h6 className="secondary-text-color">
              across 100+ universities, colleges, and learning institutions
              across the world
            </h6>
          </div>

          <div className="d-flex justify-content-around flex-wrap mt-5 py-4">
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={harvardLogo}
              alt="harvard Logo"
              className="img-fluid mt-4 mt-lg-0"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={cambridgeLogo}
              alt="cambridge Logo"
              className="img-fluid mt-4 mt-lg-0"
              style={{ maxWidth: "100%", height: "auto" }}
            />

            <motion.img
              whileHover={{ scale: 1.1 }}
              src={udemyLogo}
              alt="udemy Logo"
              className="img-fluid mt-4 mt-lg-0"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={Standford}
              alt="Standford Logo"
              className="img-fluid mt-4 mt-lg-0"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <div className="d-flex justify-content-center  flex-wrap ">
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={Coursera}
              alt="courser Logo"
              className="img-fluid mt-4 mt-lg-0 justify-content-centre"
              style={{ maxWidth: "100%", height: "auto", padding: "30px" }}
            />
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={Altschool}
              alt="altschool Logo"
              className="img-fluid mt-4 mt-lg-0 "
              style={{ maxWidth: "100%", height: "auto", padding: "30px" }}
            />

            <motion.img
              whileHover={{ scale: 1.1 }}
              src={Ielts}
              alt="ielts Logo"
              className="img-fluid mt-4 mt-lg-0"
              style={{ maxWidth: "100%", height: "auto", padding: "30px" }}
            />
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={CityLogo}
              alt="city Logo"
              className="img-fluid mt-4 mt-lg-0"
              style={{ maxWidth: "100%", height: "auto", padding: "30px" }}
            />
          </div>
        </div>
        {/* testimonial section */}
        <div className="testimonial-section background-color p-4">
          <div className="text-center " style={{ marginBottom: "72px" }}>
            <p style={{ marginTop: "72px" }}>Don’t just listen to us</p>
            <h1 className=" secondary-font secondary-text-color fw-bold">
              Listen to what our users are saying
            </h1>
          </div>

          <div className="testimonial-row top-row mt-2 header-color ">
            <div className="testimonial border custom-shadow p-3">
              <div>
                <BsStarFill style={{ color: "#FF9B00" }} />
                <BsStarFill style={{ color: "#FF9B00" }} />
                <BsStarFill style={{ color: "#FF9B00" }} />
                <BsStarFill style={{ color: "#FF9B00" }} />
                <BsStarFill style={{ color: "#FF9B00" }} />
              </div>
              <p>
                {" "}
                “My daughter recently got accepted to her dream school in US,
                everything was amazing...until the tuition hit. Thankfully,
                Tuition by Flutterwave saved the day! Safe, secure transfer with
                tracking? 5 star, I highly recommend”
              </p>
              <div className="d-flex align-items-center justify-content-start">
                <img
                  src={Avatar}
                  alt="Avatar"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <div className="ms-3">
                  <h6 className="mb-0 fw-bold">Chimamanda</h6>
                  <Row className="m-0 p-0">
                    <p style={{ marginLeft: "-10px" }} className="mb-0">
                      Nigeria
                    </p>
                  </Row>
                </div>
              </div>
            </div>

            <div className="testimonial border custom-shadow">
              <div>
                <BsStarFill style={{ color: "#FF9B00" }} />
                <BsStarFill style={{ color: "#FF9B00" }} />
                <BsStarFill style={{ color: "#FF9B00" }} />
                <BsStarFill style={{ color: "#FF9B00" }} />
                <BsStarFill style={{ color: "#FF9B00" }} />
              </div>
              <p>
                {" "}
                “My daughter recently got accepted to her dream school in US,
                everything was amazing...until the tuition hit. Thankfully,
                Tuition by Flutterwave saved the day! Safe, secure transfer with
                tracking? 5 star, I highly recommend”
              </p>
              <div className="d-flex align-items-center justify-content-start">
                <img
                  src={Avatar}
                  alt="Avatar"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <div className="ms-3">
                  <h6 className="mb-0 fw-bold">Chimamanda</h6>
                  <Row className="m-0 p-0">
                    <p style={{ marginLeft: "-10px" }} className="mb-0">
                      Nigeria
                    </p>
                  </Row>
                </div>
              </div>
            </div>
            <div className="testimonial border custom-shadow">
              <div>
                <BsStarFill style={{ color: "#FF9B00" }} />
                <BsStarFill style={{ color: "#FF9B00" }} />
                <BsStarFill style={{ color: "#FF9B00" }} />
                <BsStarFill style={{ color: "#FF9B00" }} />
                <BsStarFill style={{ color: "#FF9B00" }} />
              </div>
              <p>
                {" "}
                “My daughter recently got accepted to her dream school in US,
                everything was amazing...until the tuition hit. Thankfully,
                Tuition by Flutterwave saved the day! Safe, secure transfer with
                tracking? 5 star, I highly recommend”
              </p>
              <div className="d-flex align-items-center justify-content-start">
                <img
                  src={Avatar}
                  alt="Avatar"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <div className="ms-3">
                  <h6 className="mb-0 fw-bold">Chimamanda</h6>
                  <Row className="m-0 p-0">
                    <p style={{ marginLeft: "-10px" }} className="mb-0">
                      Nigeria
                    </p>
                  </Row>
                </div>
              </div>
            </div>
            <div className="testimonial border custom-shadow">
              <div>
                <BsStarFill style={{ color: "#FF9B00" }} />
                <BsStarFill style={{ color: "#FF9B00" }} />
                <BsStarFill style={{ color: "#FF9B00" }} />
                <BsStarFill style={{ color: "#FF9B00" }} />
                <BsStarFill style={{ color: "#FF9B00" }} />
              </div>
              <p>
                {" "}
                “My daughter recently got accepted to her dream school in US,
                everything was amazing...until the tuition hit. Thankfully,
                Tuition by Flutterwave saved the day! Safe, secure transfer with
                tracking? 5 star, I highly recommend”
              </p>
              <div className="d-flex align-items-center justify-content-start">
                <img
                  src={Avatar}
                  alt="Avatar"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <div className="ms-3">
                  <h6 className="mb-0 fw-bold">Chimamanda</h6>
                  <Row className="m-0 p-0">
                    <p style={{ marginLeft: "-10px" }} className="mb-0">
                      Nigeria
                    </p>
                  </Row>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-row bottom-row">
            <div className="testimonial border custom-shadow">
              <div>
                <BsStarFill style={{ color: "#FF9B00" }} />
                <BsStarFill style={{ color: "#FF9B00" }} />
                <BsStarFill style={{ color: "#FF9B00" }} />
                <BsStarFill style={{ color: "#FF9B00" }} />
                <BsStarFill style={{ color: "#FF9B00" }} />
              </div>
              <p>
                {" "}
                “My daughter recently got accepted to her dream school in US,
                everything was amazing...until the tuition hit. Thankfully,
                Tuition by Flutterwave saved the day! Safe, secure transfer with
                tracking? 5 star, I highly recommend”
              </p>
              <div className="d-flex align-items-center justify-content-start">
                <img
                  src={Avatar}
                  alt="Avatar"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <div className="ms-3">
                  <h6 className="mb-0 fw-bold">Chimamanda</h6>
                  <Row className="m-0 p-0">
                    <p style={{ marginLeft: "-10px" }} className="mb-0">
                      Nigeria
                    </p>
                  </Row>
                </div>
              </div>
            </div>
            <div className="testimonial border custom-shadow">
              <div>
                <BsStarFill style={{ color: "#FF9B00" }} />
                <BsStarFill style={{ color: "#FF9B00" }} />
                <BsStarFill style={{ color: "#FF9B00" }} />
                <BsStarFill style={{ color: "#FF9B00" }} />
                <BsStarFill style={{ color: "#FF9B00" }} />
              </div>
              <p>
                {" "}
                “My daughter recently got accepted to her dream school in US,
                everything was amazing...until the tuition hit. Thankfully,
                Tuition by Flutterwave saved the day! Safe, secure transfer with
                tracking? 5 star, I highly recommend”
              </p>
              <div className="d-flex align-items-center justify-content-start">
                <img
                  src={Avatar}
                  alt="Avatar"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <div className="ms-3">
                  <h6 className="mb-0 fw-bold">Chimamanda</h6>
                  <Row className="m-0 p-0">
                    <p style={{ marginLeft: "-10px" }} className="mb-0">
                      Nigeria
                    </p>
                  </Row>
                </div>
              </div>
            </div>
            <div className="testimonial border border custom-shadow">
              <div>
                <BsStarFill style={{ color: "#FF9B00" }} />
                <BsStarFill style={{ color: "#FF9B00" }} />
                <BsStarFill style={{ color: "#FF9B00" }} />
                <BsStarFill style={{ color: "#FF9B00" }} />
                <BsStarFill style={{ color: "#FF9B00" }} />
              </div>
              <p>
                {" "}
                “My daughter recently got accepted to her dream school in US,
                everything was amazing...until the tuition hit. Thankfully,
                Tuition by Flutterwave saved the day! Safe, secure transfer with
                tracking? 5 star, I highly recommend”
              </p>
              <div className="d-flex align-items-center justify-content-start">
                <img
                  src={Avatar}
                  alt="Avatar"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <div className="ms-3">
                  <h6 className="mb-0 fw-bold">Chimamanda</h6>
                  <Row className="m-0 p-0">
                    <p style={{ marginLeft: "-10px" }} className="mb-0">
                      Nigeria
                    </p>
                  </Row>
                </div>
              </div>
            </div>
            <div className="testimonial border custom-shadow">
              <div>
                <BsStarFill style={{ color: "#FF9B00" }} />
                <BsStarFill style={{ color: "#FF9B00" }} />
                <BsStarFill style={{ color: "#FF9B00" }} />
                <BsStarFill style={{ color: "#FF9B00" }} />
                <BsStarFill style={{ color: "#FF9B00" }} />
              </div>
              <p>
                {" "}
                “My daughter recently got accepted to her dream school in US,
                everything was amazing...until the tuition hit. Thankfully,
                Tuition by Flutterwave saved the day! Safe, secure transfer with
                tracking? 5 star, I highly recommend”
              </p>
              <div className="d-flex align-items-center justify-content-start">
                <img
                  src={Avatar}
                  alt="Avatar"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <div className="ms-3">
                  <h6 className="mb-0 fw-bold">Chimamanda</h6>
                  <Row className="m-0 p-0">
                    <p style={{ marginLeft: "-10px" }} className="mb-0">
                      Nigeria
                    </p>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Explore new Features  */}

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
        {/* End of Explore new features  */}

        {/* Steps to process payment */}
        <div className=" p-5 background-color">
          <div className=" mb-5">
            <h1 className="text-color-blue secondary-font fw-bold text-center">
              4 easy steps to process payment{" "}
            </h1>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="text-center" style={{ padding: "24px" }}>
                <img
                  whileHover={{ scale: 1.1 }}
                  src={Step1}
                  alt="Circle1"
                  className="img-fluid mt-4 mt-lg-0"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <h6
                  style={{ marginTop: "24px" }}
                  className="text-color-blue fw-bold"
                >
                  Create an account
                </h6>
                <p style={{ marginTop: "24px" }}>
                  Sign up with your email, Google, or Apple login and breeze
                  through the sign-up process in just a few minutes. Easy-peasy!
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-center" style={{ padding: "24px" }}>
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={Step2}
                  alt="Circle 2"
                  className="img-fluid mt-4 mt-lg-0"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <h6
                  style={{ marginTop: "24px" }}
                  className="text-color-blue fw-bold"
                >
                  Submit your information
                </h6>
                <p style={{ marginTop: "24px" }}>
                  Select a school, online course service provider and enter all
                  the required payment information, as well as your student
                  information.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-center" style={{ padding: "24px" }}>
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={Step3}
                  alt="Circle 3"
                  className="img-fluid mt-4 mt-lg-0"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <h6
                  style={{ marginTop: "24px" }}
                  className="text-color-blue fw-bold"
                >
                  Verify your information
                </h6>
                <p style={{ marginTop: "24px" }}>
                  Double-check all the details provided and proceed to payment.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-center" style={{ padding: "24px" }}>
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={Step4}
                  alt="Circle 4"
                  className="img-fluid mt-4 mt-lg-0"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <h6
                  style={{ marginTop: "24px" }}
                  className="text-color-blue fw-bold"
                >
                  Payment confirmation
                </h6>
                <p style={{ marginTop: "24px" }}>
                  We’ll confirm your payment with your school or service
                  provider in 48 hours, and keep you updated every step of the
                  way as well.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* End of steps to process payment */}
        {/* safty and security guaranteed */}
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
            <div></div>
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
        <motion.image>
          <img
            src={Download}
            alt="Download App"
            className="img-fluid"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </motion.image>
      </div>
    </>
  );
}