import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <h1>Covid-19 Test & Trace</h1>
      <p>
        ✏️ <br /> By filling out this form, you are helping us provide vital
        Test and Trace information to the NHS.
      </p>
      <p>
        🔒 <br /> Any data you share will be stored securely and held
        temporarily. We will never share or use your data anywhere outside this
        programme.
      </p>
    </div>
  );
}

export default Header;
