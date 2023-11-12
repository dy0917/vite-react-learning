import { useUserContext } from '../Store/UserContext';
import CounterComponent from '../Components/CounterComponent';
import { useCounterContext } from '../Store/CounterContext';
export default function Homepage() {
  const { currentUser, handleUpdateUser, handleUserToken } = useUserContext();
  const { counter } = useCounterContext();
  let email = '';
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reloading on form submit

    const data = new FormData(e.target);
    const formObject = Object.fromEntries(data.entries());
    handleUpdateUser({ email: formObject.email });
  };
  const setToken = (e) => {
    handleUserToken('this is a token');
  };
  return (
    <>
      <div className="Homepage">
        <h1>Home</h1>
        {currentUser.email}
        <div>Counter:{counter}</div>
        <div className="LoginForm componentBox">
          <form onSubmit={handleSubmit}>
            <div className="formRow">
              <label>
                Email Address:
                <input type="email" defaultValue={email} name="email" />
              </label>
            </div>
            <button type="submit">Submit</button>
            <button onClick={setToken}>Set token</button>
          </form>
        </div>
      </div>
    </>
  );
}

export function Jennetpage() {
  return (
    <div className="Jennetpage">
      <h1>Jennetpage</h1>
      <CounterComponent />
    </div>
  );
}

export function a() {}
