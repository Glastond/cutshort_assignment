import React, { useState } from "react";

const Third = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <div className="display-6 mb-1" style={{ fontWeight: "600" }}>
        How are you planning to use Eden?
      </div>
      <p className="text-muted">
        we'll streamline your setup experience accordingly.
      </p>
      <div className="form-wrapper">
        <div className="row" style={{ height: "190px" }}>
          <div className="col-12 col-md-6">
            <div
              className={
                selected === 1
                  ? "card card-selected text-start h-100"
                  : "card text-start h-100"
              }
              role="button"
              onClick={() => setSelected(1)}
            >
              <div className="card-body">
                <i className="fas fa-user mb-3"></i>
                <p className="fw-bold">For myself</p>
                <p className="text-muted">
                  Write better. Think more clearly. Stay organized.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div
              className={
                selected === 2
                  ? "card card-selected text-start h-100"
                  : "card text-start h-100"
              }
              onClick={() => setSelected(2)}
            >
              <div className="card-body" role="button">
                <i className="fas fa-users mb-3"></i>
                <p className="fw-bold">With my team</p>
                <p className="text-muted">
                  Wikis, docs, tasks & projects, all in one place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;
