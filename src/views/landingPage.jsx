import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import Header from "../components/header";
import heroImage from "../assets/Hero Images.png"; // Adjust the path as needed
// import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import harvardLogo from "../assets/harvard_university_logo.svg.png";
import udemyLogo from "../assets/udemy_logo.svg.png";
import cambridgeLogo from "../assets/cambridge_university_press__assessment_logo.png.png";
import Standford from "../assets/Group.png";
import Coursera from "../assets/coursera_logo.svg (1).png";
import Altschool from "../assets/altcareer_logo.png.png";
import Ielts from "../assets/ielts_online_tests_logo.svg.png";
import CityLogo from "../assets/the_city_university_of_new_york_logo.svg.png";
import Step1 from "../assets/Number1 container.png";
import Step2 from "../assets/Number container2.png";
import Step3 from "../assets/Number container (1).png"; 
import Step4 from "../assets/Number container (2).png";
import Download from "../assets/Download mobile app section.png";
import Testimonial from "./testimonial";
import Usetuition from "./useTuition";
import Explore from "./explore";
import SafteySecurity from "./security";
import Faq from "./faqs"
 function LandingPage() {
  return (
    <>
      {/* <Helmet>
        <title>Your Page Title</title>
        {/* Add other meta tags, etc. */}
      {/* </Helmet> */}
      <div className='header-bg'>
        <Header />
    
        <Container style={{ marginTop: "9%" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="row"
          >
            <div
              className="col-md-6 mb-4 mb-md-0 "
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
                className="img-fluid  mt"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </motion.div>
        </Container>

        {/* why use tuition */}
        <Usetuition />

        <div className="my-5 p-5 header-bg">
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
        <Testimonial />

        {/* Explore new Features  */}
<Explore />
        {/* End of Explore new features  */}

        {/* Steps to process payment */}
        <div className=" p-5 background-color" style={{marginTop:"375px"}}>
          <div className=" mb-5">
            <h1 className="text-color-blue secondary-font fw-bold text-center">
              4 easy steps to process payment{" "}
            </h1>
          </div>
          <div className="row" style={{marginTop:"120px"}}>
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
        <Faq />
       <SafteySecurity />
      
    
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

export default LandingPage;