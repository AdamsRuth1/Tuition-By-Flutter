// import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <>
      <div className=" p-5 d-flex mb-3 justify-content-between">
        <div className=" flex-fill header-bg ">
          <p className="mb-5"> Payment Links</p>
          <div className="d-flex flex-column ">
            <a href="./invoice" className=" a mb-5">
              Invoices
            </a>
            <a href="./invoice" className="a mb-5">
              Capital
            </a>
            <a href="./invoice" className="a mb-5">
              Grow
            </a>
            <a href="./invoice" className="a mb-5">
              Card Issuing
            </a>
            <a href="./invoice" className="a mb-5">
              Faas
            </a>
            <a href="./invoice" className="a mb-5">
              Send App
            </a>
            <a href="./invoice" className=" a mb-5">
              Tuition
            </a>
          </div>
        </div>
        <div className=" flex-fill header-bg ">
          <p className="mb-5">Blog</p>
          <div className="d-flex flex-column ">
            <a href="./invoice" className="a mb-5">
              Integrations
            </a>
            <a href="./invoice" className="a mb-5">
              Why you get charged
            </a>
            <a href="./invoice" className="a mb-5">
              Cookie settings
            </a>
            <a href="./invoice" className="a mb-5">
              Payment Protection Promise
            </a>
          </div>
        </div>
        <div className=" flex-fill header-bg ">
          <div className="d-flex flex-column ">
            <p className="">ApPI Status</p>
          </div>
        </div>
        <div className="flex-fill header-bg ">
          <div className="d-flex flex-column ">
            <p className="mb-5">Press</p>
            <a href="" className="a mb-5">
              {" "}
              Covid 19
            </a>
          </div>
        </div>
        <div className="flex-fill header-bg ">
          <div className="d-flex flex-column ">
            <p className="mb-5">070-FLUTTERWAVE</p>
            <a href="" className="a mb-5">
              {" "}
              X support
            </a>
            <p>Our call lines are 24/7</p>
          </div>
        </div>
      </div>
    </>
  );
}
