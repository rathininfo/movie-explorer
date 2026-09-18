  import { useState, useEffect } from 'react';
  import SearchBar from '../components/SearchBar';    // ✅ uppercase C
  import MovieModal from '../components/MovieModal';     // ✅ uppercase M
  import MovieCard from '../components/movieCard';

  export default function Movies() {
    const [query, setQuery] = useState('');
    const [shows, setShows] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [selectedShow, setSelectedShow] = useState(null);

    useEffect(() => {
      const timer = setTimeout(async () => {
        setLoading(true);
        setError('');

        try {
          const url = query.trim()
            ? `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`
            : 'https://api.tvmaze.com/shows?page=0';

          const res = await fetch(url);
          const data = await res.json();

          setShows(query.trim() ? data.map((item) => item.show) : data);
        } catch {
          setError('Something went wrong! Try again.');
        } finally {
          setLoading(false);
        }
      }, 400);

      return () => clearTimeout(timer);
    }, [query]);

    return (
      <div className="w-full max-w-[1200px] mx-auto flex flex-col p-4 sm:p-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 mt-6">
          Explore <span className="text-primary">Movies</span> & TV Shows
        </h2>

        <p className="text-center text-gray-400 mb-8">
          Search from thousands of titles
        </p>

        <SearchBar value={query} onChange={setQuery} />

        {loading && (
          <p className="text-center text-gray-400 py-10">Loading...</p>
        )}

        {error && (
          <p className="text-center text-red-500 py-10">{error}</p>
        )}

        {!loading && !error && shows.length > 0 && (
          <p className="text-sm text-gray-500 mb-4">
            Showing {shows.length} result{shows.length !== 1 ? 's' : ''}
            {query.trim() ? ` for "${query}"` : ''}
          </p>
        )}

        {!loading && !error && shows.length === 0 && (
          <p className="text-center text-gray-400 py-10">No movies found 😕</p>
        )}

        {!loading && !error && shows.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {shows.map((show) => (
              <MovieCard
                key={show.id}
                show={show}
                onSeeDetails={() => setSelectedShow(show)}
              />
            ))}
          </div>
        )}

        {selectedShow && (
          <MovieModal
            show={selectedShow}
            onClose={() => setSelectedShow(null)}
          />
        )}
      </div>
    );
  }