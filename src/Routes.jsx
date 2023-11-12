import Homepage, { Jennetpage } from './Pages/Home';
import DashboardPage from './Pages/DashboardPage';
import DashboardMessages from './Pages/DashboardMessages';
import DashboardTasks from './Pages/DashboardTasks';
import PageNotFound from './Pages/PageNotFound';
import { Routes, Route } from 'react-router-dom';
import ReduxTodoList from './Components/ReduxTodoList';
import PostsPage from './Pages/PostsPage';
import PostList from './Pages/PostList';
import Post from './Pages/Post';
import ActivityFinder from './Pages/ActivityFinder';
import SubscribeForm from './Pages/SubscribeForm';
import ProtectedRoute from './Pages/ProtectRoute';
import Calculator from './Components/CalculatorComponent';
import MUIDemo from './Pages/MUI';
function AppRoutes(props) {
  return (
    <Routes>
      {/* index matches on default/home URL: / */}
      <Route index element={<Homepage {...props} />} />
      <Route path="jennet" element={<Jennetpage {...props} />} />
      <Route path="calculator" element={<Calculator {...props} />} />
      <Route path="activityFinder" element={<ActivityFinder {...props} />} />
      <Route path="MUIDemo" element={<MUIDemo />}></Route>
      <Route
        path="dashboard"
        element={<ProtectedRoute redirectPath={'/jennet'} />}
      >
        <Route index element={<DashboardPage {...props} />} />
        <Route path="messages" element={<DashboardMessages />} />
        <Route path="tasks" element={<DashboardTasks />} />
      </Route>

      <Route path="todo" element={<ReduxTodoList {...props} />} />
      <Route path="/subscribe" element={<SubscribeForm {...props} />}></Route>
      <Route path="/posts" element={<PostsPage {...props} />}>
        <Route index element={<PostList />} />
        {/* //dynamic param taken from route, stored in variable called id */}
        <Route path=":id" element={<Post />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRoutes;
