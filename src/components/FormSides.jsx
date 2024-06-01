import formImage from "../assets/images/SignIn-image.svg";

const FormSides = () => {
  return (
    <section className=" ps-4">
      <div
        className="d-flex justify-content-center align-item-center"
        style={{ paddingTop: "7rem" }}
      >
        <img src={formImage} alt="" width={352} height={320} />
      </div>
      <div className="d-flex justify-content-center align-item-center">
        <h2
          className="text-center "
          style={{
            width: "240px",
            height: "144px",
            paddingTop: "2.6rem",
            fontWeight: "400",
            fontSize: "2.375rem",
            lineHeight: "3rem",
            paddingBottom: "21.2rem",
          }}
        >
          Pay Local. <br /> Study Global with
          <span style={{ color: "#EB5757" }}>Tuition</span>
        </h2>
      </div>
      <div
        style={{
          width: "36rem",
          height: "4.5rem",
          fontWeight: "400",
          fontSize: "0.875rem",
          lineHeight: "1.5rem",
          color: "#A1A4A8",
        }}
        className="text-center"
      >
        <p className="pb-5">
          Tuition is powered by Swap, a product of Flutterwave Technology
          Solutions Limited - Licensed by the Central Bank of Nigeria in
          partnership with Kadavra BDC and Wema Bank
        </p>
      </div>
    </section>
  );
};

export default FormSides;
