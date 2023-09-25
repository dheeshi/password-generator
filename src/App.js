import React, { useState } from "react";

import "./App.css";

const App = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(12);
  const [useSymbols, setUseSymbols] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useLowerCase, setUseLowerCase] = useState(true);
  const [useUpperCase, setUseUpperCase] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");

  const generatePassword = () => {
    let charset = "";
    let newPassword = "";

    if (useSymbols) charset += "!@#$%^&*()";
    if (useNumbers) charset += "0123456789";
    if (useLowerCase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (useUpperCase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < passwordLength; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    setPassword(newPassword);
  };

  const copyToClipboard = () => {
    const el = document.createElement("textarea");
    el.value = password;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setSuccessMessage("Password copied to clipboard!");
    setTimeout(() => setSuccessMessage(""), 2000);
    // Hide message after 2 seconds
  };

  return (
    <>
      <div class="container">
        <h2>Password Generator</h2>
        {password && (
          <div class="result-container">
            <input
              id="result"
              type="text"
              class="form-control"
              value={password}
              readOnly
            />
            <button class="btn" id="clipboard" onClick={copyToClipboard}>
              <i class="fa-regular fa-clipboard"></i>
            </button>
          </div>
        )}
        {successMessage && (
          <p
            style={{
              color: "greenyellow",
              textAlign: "center",
            }}
          >
            {successMessage}
          </p>
        )}
        <div class="settings">
          <div class="setting">
            <label class="form-label" for="typeNumber">
              Password Length :
            </label>
            <input
              type="number"
              id="typeNumber"
              class="form-control"
              min="6"
              max="36"
              value={passwordLength}
              onChange={(e) => setPasswordLength(e.target.value)}
            />
          </div>
          <div>
            <h4>Settings :</h4>
          </div>
          <div class="setting form-check form-switch">
            <label>Include numbers</label>
            <input
              type="checkbox"
              class="form-check-input"
              id="flexSwitchCheckChecked"
              checked={useNumbers}
              onChange={() => setUseNumbers(!useNumbers)}
            />
          </div>
          <div class="setting form-check form-switch">
            <label>Include symbols</label>
            <input
              type="checkbox"
              class="form-check-input"
              id="flexSwitchCheckChecked"
              checked={useSymbols}
              onChange={() => setUseSymbols(!useSymbols)}
            />
          </div>
          <div class="setting form-check form-switch">
            <label>Include lowercase letters</label>
            <input
              type="checkbox"
              class="form-check-input"
              id="flexSwitchCheckChecked"
              checked={useLowerCase}
              onChange={() => setUseLowerCase(!useLowerCase)}
            />
          </div>
          <div class="setting form-check form-switch">
            <label>Include uppercase letters</label>
            <input
              type="checkbox"
              class="form-check-input"
              id="flexSwitchCheckChecked"
              checked={useUpperCase}
              onChange={() => setUseUpperCase(!useUpperCase)}
            />
          </div>
        </div>

        <button class="btn btn-large" onClick={generatePassword}>
          Generate Password
        </button>
      </div>
      <div class="footer">
        <h5 class="ftr">by dheeshi</h5>
      </div>
    </>
  );
};

export default App;
