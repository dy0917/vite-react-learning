import { useUserContext } from './Store/UserContext';

const Home = ({ children }) => {
  const { currentUser, handleUpdateUser } = useUserContext();
  return (
    <>
      <div>this is home element {children}</div>
      {currentUser.email}
    </>
  );
};

export default Home;
