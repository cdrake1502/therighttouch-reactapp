import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App" whats the command to take an existing project and make it a github repository>
      <div className="container-fluid landing-page">
        {/* Header */}
        <header className="row align-items-center py-3 bg-dark text-white">
          <div className="col-md-6 col-sm-12 text-center">
            <h1 className="display-4 mb-0">
              The Right Touch Construction & Home Repair
            </h1>{" "}
            {/* Replace with your company name */}
          </div>
          <div className="col-md-6 col-sm-12 text-end">
            <a href="#" className="btn btn-primary">
              Free Quote
            </a>
          </div>
        </header>

        {/* Hero Section */}
        <section className="row py-5 hero">
          <div className="col-md-6 col-sm-12 order-md-2">
            {/* Add an image here if you have one */}
          </div>
          <div className="col-md-6 col-sm-12 order-md-1">
            <p className="lead">
              The Right Touch is dedicated to providing excellent customer
              service and taking pride in the work we do. We operate in
              Greenwood, Abbeville, Honea Path, Laurens and surrounding areas.
            </p>
            <ul className="list-unstyled services">
              <li>Plumbing</li>
              <li>Electrical</li>
              <li>Roofing and Foundation</li>
              <li>Carpentry (Interior/Exterior)</li>
              <li>Flooring (Laminate/Tile/Wood)</li>
            </ul>
          </div>
        </section>

        {/* About Us Section (Optional) */}
        <section className="row py-5 about-us">
          <div className="col-md-8 mx-auto text-center">
            <h2>About Us</h2> {/* Replace with your About Us heading */}
            <p>
              A more detailed description of your company, its values, and its
              team. {/* Replace with your About Us content */}
            </p>
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="row py-5 contact-us bg-dark text-white">
          <div className="col-md-6 col-sm-12">
            <h2>Contact Us</h2> {/* Replace with your Contact Us heading */}
            <form>
              <div className="mb-3">
                <label for="name" className="form-label">
                  Name
                </label>
                <input type="text" class="form-control" id="name" required />
              </div>
              {/* Add more form fields as needed */}
            </form>
          </div>
          <div className="col-md-6 col-sm-12 text-md-start text-center">
            <p className="mb-0">
              <b>Address:</b> Operate in Greenwood, Abbeville, Honea Path,
              Laurens and surrounding areas{" "}
              {/* Replace with your specific address */}
            </p>
            <p className="mb-0">
              <b>Phone:</b> Include phone number here{" "}
              {/* Replace with your phone number */}
            </p>
            <p className="mb-0">
              <b>Email:</b> Include email address here{" "}
              {/* Replace with your email */}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
