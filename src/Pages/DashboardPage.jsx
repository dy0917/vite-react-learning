import { useNavigate, Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar';

export default function DashboardPage() {
  // built-in hook in React Router DOM, returns a function
  const navigate = useNavigate();

  return (
    <>
      <div className="DashboardPage componentBox">
        <h1>Dashboard</h1>
        <Outlet /> {/* see next slide */}
        {/* Will render either <DashboardMessages> when the URL is
          "/dash/messages", <DashboardTasks> at "/dash/tasks",
          or null if it is "/dash" */}
        <button onClick={() => navigate('/dashboard/tasks')}>Show Tasks</button>
        <button onClick={() => navigate('/dashboard/messages')}>
          Show Messages
        </button>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </>
  );
}

export function DashboardMessages(props) {
  return (
    <div className="DashboardMessages">
      <p>Welcome to your dashboard</p>
    </div>
  );
}
