import React from 'react'

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#f1f1f1" }}>
      <div className='container mt-4 border-top pt-5 ' >
        <div className="row " style={{ m2: "15px" }}>


          <div className="col-3  text-start ">
            <img src="/media/media/logo.svg" alt="Zerodha Logo" className='img-fluid mb-3' style={{ width: "60%" }} />
            <p>&copy; 2010 - 2025, Zerodha Broking Ltd.
              All rights reserved.
            </p>
            <ul className="list-unstyled d-flex gap-3" style={{ padding: 0, margin: 0 }}>
              <li><i className="fa-brands fa-x-twitter" aria-hidden="true"></i></li>
              <li><i className="fa-brands fa-facebook" aria-hidden="true"></i></li>
              <li><i className="fa-brands fa-instagram" aria-hidden="true"></i></li>
              <li><i className="fa-brands fa-linkedin-in" aria-hidden="true" ></i></li>
              <li><i className="fa-brands fa-youtube" aria-hidden="true"></i></li>
              <li><i className="fa-brands fa-whatsapp" aria-hidden="true"></i></li>
              <li><i className="fa-brands fa-telegram" aria-hidden="true"></i></li>
            </ul>
          </div>



          {/* Other 4 menus in one row */}
          {/* Other 4 menus in one row */}
          <div className=" col-9 p-3">
            <div className=" footer-links row justify-content-between " >


              <div className="col">
                <p className="fs-5 fw-semibold mb-3">Account</p>

                <a href="#" className="d-block mb-2 text-decoration-none">Open demat account</a>
                <a href="#" className="d-block mb-2 text-decoration-none">Minor demat account</a>
                <a href="#" className="d-block mb-2 text-decoration-none">NRI demat account</a>
                <a href="#" className="d-block mb-2 text-decoration-none">Commodity</a>
                <a href="#" className="d-block mb-2 text-decoration-none">Dematerialisation</a>
                <a href="#" className="d-block mb-2 text-decoration-none">Fund transfer</a>
                <a href="#" className="d-block mb-2 text-decoration-none">MTF</a>
                <a href="#" className="d-block mb-2 text-decoration-none">Referral program</a>
              </div>

              <div className="col">
                <p className="fs-5 fw-semibold mb-3">Support</p>

                <a href="#" className="d-block mb-2 text-decoration-none">Contact us</a>
                <a href="#" className="d-block mb-2 text-decoration-none">Support portal</a>
                <a href="#" className="d-block mb-2 text-decoration-none">How to file a complaint?</a>
                <a href="#" className="d-block mb-2 text-decoration-none">Status of your complaints</a>
                <a href="#" className="d-block mb-2 text-decoration-none">Bulletin</a>
                <a href="#" className="d-block mb-2 text-decoration-none">Circular</a>
                <a href="#" className="d-block mb-2 text-decoration-none">Z-Connect blog</a>
                <a href="#" className="d-block mb-2 text-decoration-none">Downloads</a>
              </div>

              <div className="col">
                <p className="fs-5 fw-semibold mb-3">Company</p>

                <a href="#" className="d-block mb-2 text-decoration-none">About</a>
                <a href="#" className="d-block mb-2 text-decoration-none">Philosophy</a>
                <a href="#" className="d-block mb-2 text-decoration-none">Press & media</a>
                <a href="#" className="d-block mb-2 text-decoration-none">Careers</a>
                <a href="#" className="d-block mb-2 text-decoration-none">Zerodha Cares (CSR)</a>
                <a href="#" className="d-block mb-2 text-decoration-none">Zerodha.tech</a>
                <a href="#" className="d-block mb-2 text-decoration-none">Open source</a>
              </div>

              <div className="col">
                <p className="fs-5 fw-semibold mb-3">Quick links</p>

                <a href="#" className="d-block mb-2 text-decoration-none">Upcoming IPOs</a>
                <a href="#" className="d-block mb-2 text-decoration-none">Brokerage charges</a>
                <a href="#" className="d-block mb-2 text-decoration-none">Market holidays</a>
                <a href="#" className="d-block mb-2 text-decoration-none">Economic calendar</a>
                <a href="#" className="d-block mb-2 text-decoration-none">Calculators</a>
                <a href="#" className="d-block mb-2 text-decoration-none">Markets</a>
                <a href="#" className="d-block mb-2 text-decoration-none">Sectors</a>
              </div>


            </div>
          </div>
        </div>
        <div className='  mt-5 text-small text-muted ' style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633.
            CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019.
            Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking
            please write to <a href="mailto:complaints@zerodha.com" style={{ textDecoration: "none" }}>complaints@zerodha.com</a>, for DP related to <a href="mailto:dp@zerodha.com" style={{ textDecoration: "none" }}>dp@zerodha.com</a>. Please ensure you carefully read the
            Risk Disclosure Document as prescribed by SEBI | ICF.
          </p>

          <p>
            Procedure to file a complaint on <a href="https://scores.gov.in/scores/Welcome.html" style={{ textDecoration: "none" }}>SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints:
            Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of grievances.
          </p>

          <p><a href="#" style={{ textDecoration: "none" }}>Smart Online Dispute Resolution</a> | <a href="#" style={{ textDecoration: "none" }}>Grievances Redressal Mechanism</a>.</p>

          <p>
            Investments in securities market are subject to market risks; read all related documents carefully before investing.
          </p>

          <p>
            Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the
            depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker /
            depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create
            pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
          </p>

          <p>India's largest broker based on networth as per NSE. <a href="#" style={{ textDecoration: "none" }}>NSE broker factsheet</a>.</p>

          <p>
            Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers.
            Receive information of your transactions directly from Exchange on your mobile/email at the end of the day.
            Issued in the interest of investors. KYC is one time exercise while dealing in securities markets – once KYC
            is done through a SEBI registered intermediary, you need not undergo the same process again. Dear Investor,
            if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and
            sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non-allotment
            the funds will remain in your bank account. We do not give stock tips or authorize anyone to trade on behalf of
            others. If you find anyone claiming to be part of Zerodha and offering such services, please report them here <a href="#" style={{ textDecoration: "none" }}>create a ticket here</a>.
          </p>
        </div>
        <div className="footer-links text-center d-flex justify-content-center gap-3 flex-wrap ">

          <a href="#" className="text-decoration-none">NSE</a>
          <a href="#" className="text-decoration-none">BSE</a>
          <a href="#" className="text-decoration-none">MCX</a>
          <a href="#" className="text-decoration-none">Terms & conditions</a>
          <a href="#" className="text-decoration-none">Policies & procedures</a>
          <a href="#" className="text-decoration-none">Privacy policy</a>
          <a href="#" className="text-decoration-none">Disclosure</a>
          <a href="#" className="text-decoration-none">For investor's attention</a>
          <a href="#" className="text-decoration-none">Investor charter</a>

        </div>

      </div>
    </footer>
  )
}

export default Footer



