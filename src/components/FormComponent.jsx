import { useState } from 'react';

function LoginForm() {
  // input state values always need to be strings - empty initially
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const [error, setError] = useState('');
  const [formInfo, setFormInfo] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reloading on form submit
    console.log('formInfo', formInfo);
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data));
  };

  console.log('render');
  const validation = (formInfo) => {
    try {
      if (!formInfo.email) {
        setError('Email is required');
      }
    } catch (e) {}
  };

  //   console.log('userPassword', userPassword);
  return (
    <div className="LoginForm componentBox">
      <form onSubmit={handleSubmit}>
        <div className="formRow">
          <label>
            Email Address:
            {/* Controlled form element needs both value and onChange.
             onChange handler uses event param e to access target value.
             Whenever user types, new value is stored in state. */}
            <input type="email" defaultValue={formInfo.email} name="email" />
            {error ? <span>{error}</span> : <></>}
          </label>
        </div>
        <div className="formRow">
          <label>
            Password:
            <input
              type="password"
              defaultValue={formInfo.password}
              name="password"
            />
          </label>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
// try removing the onChange prop and typing in a field
export default LoginForm;
