import "./Navbar.css";
import GetInTouch from "./GetInTouch";
import altyLogo from "./assets/AltyProperty-.png";
import { navbarMobile } from "./js/navbarMobile.js";
import { useEffect } from "react";

function Nav() {
  useEffect(() => {
    // Prevent bootstrap default collapse on click on submenu
    const navbarEventPrevention = navbarMobile();
    return navbarEventPrevention;
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/" aria-label="Home">
            <img className="logo-icon" src={altyLogo} alt="alty-logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              {/* About option */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About
                </a>
                <ul className="dropdown-menu primary-menu">
                  <li>
                    <a className="dropdown-item" href="/whyus">
                      Why Choose Us?
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/about/aboutus">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/about/reviews">
                      Reviews
                    </a>
                  </li>
                </ul>
              </li>

              {/* Sales option */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sales
                </a>
                <ul className="dropdown-menu primary-menu">
                  <li className="nav-item dropdown-submenu">
                    <a
                      className="dropdown-item dropdown-toggle dropdown-event-prevent"
                      href="#"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Buying
                    </a>
                    <ul className="dropdown-menu dropdown-submenu-item">
                      <li>
                        <a
                          className="nav-item dropdown-item"
                          href="/propertyinfo/sale/all"
                        >
                          All Properties
                        </a>
                      </li>
                      <li>
                        <a
                          className="nav-item dropdown-item"
                          href="/propertyinfo/sale/open"
                        >
                          Properties For Sale
                        </a>
                      </li>
                      <li>
                        <a
                          className="nav-item dropdown-item"
                          href="/stampdutycalculator"
                        >
                          Stamp Duty Calculator
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown-submenu">
                    <a
                      className="dropdown-item dropdown-toggle dropdown-event-prevent"
                      href="/valuationform"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Selling
                    </a>
                    <ul className="dropdown-menu dropdown-submenu-item">
                      <li>
                        <a
                          className="nav-item dropdown-item"
                          href="/valuationform"
                        >
                          Book Valuation
                        </a>
                      </li>
                      <li>
                        <a
                          className="nav-item dropdown-item"
                          href="/propertyinfo/sale/sold"
                        >
                          Recently Sold
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              {/* Lettings option */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Lettings
                </a>
                <ul className="dropdown-menu primary-menu">
                  <li className="nav-item dropdown-submenu">
                    <a
                      className="dropdown-item dropdown-toggle dropdown-event-prevent"
                      href="#"
                    >
                      Landlords
                    </a>
                    <ul className="dropdown-menu dropdown-submenu-item">
                      <li>
                        <a
                          className="nav-item dropdown-item"
                          href="/valuationform"
                        >
                          Book Valuation
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown-submenu">
                    <a
                      className="dropdown-item dropdown-toggle dropdown-event-prevent"
                      href="#"
                    >
                      Tenants
                    </a>
                    <ul className="dropdown-menu dropdown-submenu-item">
                      <li>
                        <a
                          className="nav-item dropdown-item"
                          href="/propertyinfo/let/open"
                        >
                          Properties to Rent
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              {/* Saved properties */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Saved Properties
                </a>
                <ul className="dropdown-menu primary-menu">
                  <li className="nav-item dropdown-submenu">
                    <a className="dropdown-item" href="/savedproperty/sale">
                      Buying
                    </a>
                  </li>
                  <li className="nav-item dropdown-submenu">
                    <a className="dropdown-item" href="/savedproperty/let">
                      Renting
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            {/* Right-nav-items */}
            {/* Get in Touch */}
            <ul className="right-nav-items">
              <li className="nav-item form-btn">
                <a
                  className="nav-link active"
                  id="get-in-touch-btn"
                  aria-current="page"
                  href="#"
                >
                  Get in Touch
                </a>
              </li>
              {/* Book Valuation */}
              <li className="nav-item form-btn">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/valuationform"
                >
                  Book Valuation
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <GetInTouch />
    </>
  );
}

export default Nav;
