import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="NavBar">
      <ul className="menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/Jennet">Jennt Page</NavLink>
        </li>
        <li>
          <NavLink to="/posts">Posts</NavLink>
        </li>
        <li>
          <NavLink to="/activityFinder">Activity Finder</NavLink>
        </li>
        <li>
          <NavLink to="/subscribe">Subscribe</NavLink>
        </li>
      </ul>
    </nav>
  );
}
