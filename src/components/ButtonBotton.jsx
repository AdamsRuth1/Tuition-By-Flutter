import {Link} from "react-router-dom"

const ButtonBotton = ({ text, navigate, to, footerText,className }) => {
  return (
    <>
      <div className="text-center pt-3" style={{ paddingBottom: "1.9rem" }}>
        <p
          style={{
            fontWeight: "400",
            fontSize: "1rem",
            lineHeight: "1rem",
            color: "#606569",
          }}
        >
          {text}
          <Link
            to={to}
            style={{
              color: "#0A0E27",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            {navigate}
          </Link>
        </p>
      </div>
      <div
        style={{
          width: "29rem",
          height: "4.5rem",
          fontWeight: "400",
          fontSize: "0.875rem",
          lineHeight: "1.5rem",
          color: "#A1A4A8",
        }}
        className="text-center"
      >
        <p className={`pb-5 ${className}`}>
          By clicking “{footerText}”, I acknowledge that I have read and do
          hereby accept the terms and conditions in the Flutterwave's
          <span style={{ textDecoration: "underline" }}>Term’s of Use</span>
          and
          <span style={{ textDecoration: "underline" }}>Privacy Policy</span>
        </p>
      </div>
    </>
  );
};

export default ButtonBotton
