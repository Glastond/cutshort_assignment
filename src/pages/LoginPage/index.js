import React, { useState } from "react";
import { First, Fourth, Second, Third } from "../../components";
import "./index.css";

const LoginPage = () => {
  let [step, setStep] = useState(1);
  let content = <First />;

  switch (step) {
    case 1:
      content = <First />;
      break;
    case 2:
      content = <Second />;
      break;
    case 3:
      content = <Third />;
      break;
    case 4:
      content = <Fourth />;
      break;
    default:
      content = <First />;
  }
  const handleBtnClick = () => {
    if (step < 4) setStep((step += 1));
  };

  return (
    <div className=" py-5 h-100">
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-10 col-xl-10">
          <div>
            {/* Header */}
            <img src="./eden_logo.png" alt="logo" />
            <div className="text-center">
              <div className="progressbar">
                <div className="progress" id="progress"></div>
                <div
                  className="progress-ind"
                  style={{
                    width: `${
                      33 * (step - 1) + 20 < 100 ? 33 * (step - 1) + 20 : 99
                    }%`,
                  }}
                ></div>
                {[1, 2, 3, 4].map((item) => {
                  return (
                    <div
                      className={
                        item <= step
                          ? "progress-step progress-step-active"
                          : "progress-step"
                      }
                      data-title={item}
                      key={item}
                    ></div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Content */}
          {content}

          {/* Button */}
          <button className="submit-button" onClick={handleBtnClick}>
            {step < 4 ? "Create Workspace" : "Launch Eden"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
