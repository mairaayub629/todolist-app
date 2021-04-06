import { reduxForm, Field } from 'redux-form';

function LoginForm() {

  const handleSubmit = (values) => {
    console.log('in submit function');
  }

  return (
    <form onSubmit={handleSubmit}>
    <div className="App">
        <p className="App-intro">
          lOGIN Form
        </p>
        <label htmlFor="email">Email </label>
        <Field name="email" component="input" type="email" />
        <label htmlFor="password">Password </label>
        <Field name="password" component="input" type="password" />
    </div>
    </form>
  );
}

LoginForm = reduxForm({
  form: 'login'
})(LoginForm)

export default LoginForm
