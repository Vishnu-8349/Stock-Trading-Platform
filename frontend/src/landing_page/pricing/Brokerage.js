import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row mt-5 text-center border-top p-5">
        <div className="col-8 p-4">
          <a href="" style={{ textDecoration: "none",}}>
            <h3 className="fs-4 mb-4">Brokerage calculator</h3>
          </a>
          <ul style={{textAlign: "left", lineHeight: "2.5", fontSize: "14px"}} className="text-muted">
            <li>
              Call & Trade RMS auto-squareoff:Additional charges of &#8377; GST
              per oreder.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              &#8377;20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or &#8377;100 per executed order
              for equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or &#8377;200 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged &#8377;40 per executed instead of &#8377;20 per executed
              order.
            </li>
          </ul>
        </div>
        <div className="col-4 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-4">List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
