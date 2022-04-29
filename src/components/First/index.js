import React from "react";

const First = () => {
  return (
    <div>
      <div className="display-6 mb-1" style={{ fontWeight: "600" }}>
        Welcome! First things first...
      </div>
      <p className="text-muted">You can always change them later.</p>
      <div className="form-wrapper">
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            placeholder="Steve Jobs"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="displayName" className="form-label">
            Display Name
          </label>
          <input
            type="text"
            className="form-control"
            id="displayName"
            placeholder="Steve"
          />
        </div>
      </div>
    </div>
  );
};

export default First;
