import React from "react";

//styling
import "./Login.css";

//components
import FormCard from "../../component/FormCard";
import CustomButton from "../../component/CustomButton";

const Login = () => {
  return (
    <div className="login-page">
      <div className="theme-container">
        <FormCard>
          <h1>Login</h1>
          <p>Please login using account detail bellow.</p>
          <form>
            <div className="mb-3">
              <input
                type="email"
                className="form-control rounded-0"
                id="exampleFormControlInput1"
                placeholder="Email Address"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control rounded-0"
                id="exampleFormControlInput1"
                placeholder="Password"
              />
            </div>
            <p className="mb-3 text-start">
              Please login using account detail bellow.
            </p>
            <CustomButton isFullWidth>Login</CustomButton>
          </form>
          <p className="my-3">Please login using account detail bellow.</p>
        </FormCard>
      </div>
    </div>
  );
};
export default Login;
