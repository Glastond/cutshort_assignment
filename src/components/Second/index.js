import React from "react";

const Second = () => {
  return (
    <div>
      <div className="display-6 mb-1" style={{ fontWeight: "600" }}>
        Let's set up a home for all your work
      </div>
      <p className="text-muted">
        You can always create another workspace later.
      </p>
      <div className="form-wrapper">
        <div className="mb-3">
          <label htmlFor="workspaceName" className="form-label">
            Workspace Name
          </label>
          <input
            type="text"
            className="form-control"
            id="workspaceName"
            placeholder="Eden"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="displayName" className="form-label">
            Workspace URL <span classname="text-muted">(optional)</span>
          </label>
          <input
            type="url"
            className="form-control"
            id="displayName"
            placeholder="www.eden.com/"
          />
        </div>
      </div>
    </div>
  );
};

export default Second;
