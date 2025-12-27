import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Collapse, Button } from "react-bootstrap";
import "./CreateTicket.css";

const CreateTicket = () => {
  const [open, setOpen] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
  });

  const toggle = (key) => {
    setOpen({ ...open, [key]: !open[key] });
  };

  return (
    <div className="container p-4 mb-5">

      {/* ---------- MAIN ROW (LEFT + RIGHT) ---------- */}
      <div className="row">

        {/* ---------- LEFT SIDE (col-8) ---------- */}
        <div className="col-md-8">

          {/* Accounts Opening */}
          <div className="mt-3">
            <Button
              onClick={() => toggle("one")}
              className="clean-btn w-100 d-flex justify-content-between"
            >
              <span><i className="fa fa-plus-circle me-2"></i>Accounts Opening</span>
              <span className={`caret ${open.one ? "open" : ""}`}>&gt;</span>
            </Button>

            <Collapse in={open.one}>
              <div className="clean-list rounded-bottom">
                <a href="#" className="list-group-item">Resident individual</a>
                <a href="#" className="list-group-item">Minor</a>
                <a href="#" className="list-group-item">Non Resident Indian (NRI)</a>
                <a href="#" className="list-group-item">Company / Partnership / HUF / LLP</a>
                <a href="#" className="list-group-item">Glossary</a>
              </div>
            </Collapse>
          </div>

          {/* Profile */}
          <div className="mt-3">
            <Button
              onClick={() => toggle("two")}
              className="clean-btn w-100 d-flex justify-content-between"
            >
              <span><i className="fa fa-plus-circle me-2"></i>Profile & Security</span>
              <span className={`caret ${open.two ? "open" : ""}`}>&gt;</span>
            </Button>

            <Collapse in={open.two}>
              <div className="clean-list rounded-bottom">
                <a href="#" className="list-group-item">Your Profile</a>
                <a href="#" className="list-group-item">Account modification</a>
                <a href="#" className="list-group-item">Client Master Report (CMR)</a>
                <a href="#" className="list-group-item">Nomination</a>
                <a href="#" className="list-group-item">Transfer & conversion</a>
              </div>
            </Collapse>
          </div>

          {/* Kite */}
          <div className="mt-3">
            <Button
              onClick={() => toggle("three")}
              className="clean-btn w-100 d-flex justify-content-between"
            >
              <span><i className="fa fa-plus-circle me-2"></i>Kite</span>
              <span className={`caret ${open.three ? "open" : ""}`}>&gt;</span>
            </Button>

            <Collapse in={open.three}>
              <div className="clean-list rounded-bottom">
                <a href="#" className="list-group-item">IPO</a>
                <a href="#" className="list-group-item">Trading FAQs</a>
                <a href="#" className="list-group-item">MTF & Margins</a>
                <a href="#" className="list-group-item">Charts & orders</a>
                <a href="#" className="list-group-item">Alerts & Nudges</a>
              </div>
            </Collapse>
          </div>

          {/* Funds */}
          <div className="mt-3">
            <Button
              onClick={() => toggle("four")}
              className="clean-btn w-100 d-flex justify-content-between"
            >
              <span><i className="fa fa-plus-circle me-2"></i>Funds</span>
              <span className={`caret ${open.four ? "open" : ""}`}>&gt;</span>
            </Button>

            <Collapse in={open.four}>
              <div className="clean-list rounded-bottom">
                <a href="#" className="list-group-item">Add money</a>
                <a href="#" className="list-group-item">Withdraw money</a>
                <a href="#" className="list-group-item">Add bank accounts</a>
                <a href="#" className="list-group-item">eMandates</a>
                <a href="#" className="list-group-item">General</a>
              </div>
            </Collapse>
          </div>

          {/* Console */}
          <div className="mt-3">
            <Button
              onClick={() => toggle("five")}
              className="clean-btn w-100 d-flex justify-content-between"
            >
              <span><i className="fa fa-plus-circle me-2"></i>Console</span>
              <span className={`caret ${open.five ? "open" : ""}`}>&gt;</span>
            </Button>

            <Collapse in={open.five}>
              <div className="clean-list rounded-bottom">
                <a href="#" className="list-group-item">Portfolio</a>
                <a href="#" className="list-group-item">Corporate actions</a>
                <a href="#" className="list-group-item">Funds statement</a>
                <a href="#" className="list-group-item">Reports</a>
                <a href="#" className="list-group-item">Profile</a>
              </div>
            </Collapse>
          </div>

          {/* Coin */}
          <div className="mt-3 mb-5">
            <Button
              onClick={() => toggle("six")}
              className="clean-btn w-100 d-flex justify-content-between"
            >
              <span><i className="fa fa-plus-circle me-2"></i>Coin</span>
              <span className={`caret ${open.six ? "open" : ""}`}>&gt;</span>
            </Button>

            <Collapse in={open.six}>
              <div className="clean-list rounded-bottom">
                <a href="#" className="list-group-item">Mutual funds</a>
                <a href="#" className="list-group-item">NPS</a>
                <a href="#" className="list-group-item">Features on Coin</a>
                <a href="#" className="list-group-item">Payments & Orders</a>
                <a href="#" className="list-group-item">General</a>
              </div>
            </Collapse>
          </div>

        </div>

        {/* ---------- RIGHT SIDE QUICK LINKS (col-4) ---------- */}
        <div
          className="col-md-4 mt-3"
          
        >
          <p className="border p-3 m-0 fw-semibold text-muted">
            Track account opening
          </p>

          <p className="border p-3 m-0">1. <a href="#" style={{ textDecoration: "none" }}>Track segment activation</a></p>
          <p className="border p-3 m-0">2. <a href="#" style={{ textDecoration: "none" }}>Intraday margins</a></p>
          <p className="border p-3 m-0">3. <a href="#" style={{ textDecoration: "none" }}>Kite user manual</a></p>
          <p className="border p-3 m-0">4. <a href="#" style={{ textDecoration: "none" }}>Learn how to create a ticket</a></p>
          <p className="border p-3 m-0">5. <a href="#" style={{ textDecoration: "none" }}>Help & Support</a></p>
        </div>

      </div>
    </div>
  );
};

export default CreateTicket;
