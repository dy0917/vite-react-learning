import { useSearchParams } from 'react-router-dom';
import { useData } from '../utils/useData';

import { Link } from 'react-router-dom';

export default function PostList() {
  // updated from slide 60, replace old version
  const [searchParams, setSearchParams] = useSearchParams(); // import this hook
  const limit = searchParams.get('limit') ? searchParams.get('limit') : 5;
  const postsData = useData(
    'https://jsonplaceholder.typicode.com/posts?_limit=' + limit
  );

  const handleChangeLimit = (e) => {
    setSearchParams({ limit: e.target.value });
  };

  // the ? means only call map if postsData is not null
  const postList = postsData?.map((post) => (
    <li key={post.id}>
      <Link to={'/posts/' + post.id}>
        Post #{post.id}: {post.title}
      </Link>
    </li>
  ));
  return (
    <>
      <ul>{postList}</ul>
      <Link to="/posts?limit=10">Load 10 Posts</Link>
      <input
        type={'number'}
        defaultValue={null}
        onChange={handleChangeLimit}
      ></input>
    </>
  );
}
