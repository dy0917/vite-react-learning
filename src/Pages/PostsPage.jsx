import { Outlet } from 'react-router-dom';

export default function PostsPage() {
  return (
    <div className="Posts">
      <h1>Posts</h1>
      <Outlet />
    </div>
  );
}
