import { useState } from 'react';
import Movie from './MoveComponent';
const movies = [
  {
    id: 1, // items in data collections need unique IDs
    title: 'The Shawshank Redemption',
    year: 1994,
    synopsis: 'Two imprisoned men find redemption.',
  },
  {
    id: 2, // unique ID
    title: 'The Dark Knight',
    year: 2008,
    synopsis: 'Batman fights the menace known as the Joker.',
  },
  {
    id: 3, // unique ID
    title: 'Interstellar',
    year: 2014,
    synopsis: 'Explorers travel through a wormhole in space.',
  },
];

export default function MoviesList() {
  const [currentMovies] = useState(movies);
  const [tempMovies, setTempMovies] = useState(currentMovies);

  const movieItems = tempMovies.map((movie) => (
    <Movie
      key={movie.id}
      title={movie.title}
      year={movie.year}
      synopsis={movie.synopsis}
    />
  ));

  const handleReverseMovies = () => {
    // first clone the original, so we don’t mutate it
    let newMovies = [...tempMovies];
    newMovies.reverse(); // 2. modify the clone
    setTempMovies(newMovies); // 3. set updated clone in state
  };

  return (
    <div className="MoviesList">
      <ul>{movieItems}</ul>
      <button onClick={handleReverseMovies}>Reverse List</button>
    </div>
  );
}
