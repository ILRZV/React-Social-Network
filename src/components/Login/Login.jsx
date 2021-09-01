import React from "react";
import { Field, reduxForm } from "redux-form";

function LoginForm() {
  return (
    <form>
      <div>
        <Field placeholder="login" component="input" />
      </div>
      <div>
        <Field placeholder="password" component="input" />
      </div>
      <div>
        <Field component="input" type="checkbox" />
        <span>remeber me</span>
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
}

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

function Login() {
  return <LoginReduxForm />;
}

export default Login;
