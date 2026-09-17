import { Link } from "react-router";


export default function Navbar() {
  return (
   <nav className="sticky top-0 z-30 bg-card border-b bg-blue-950">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center px-4 h-16">
        <Link to="/" className="text-3xl font-bold text-primary"><span className="text-blue-500">Movie</span> <span className="text-white">Explorer</span></Link>

        <div className="flex items-center gap-5 text-base text-white">
          <Link to="/" className="">Home</Link>
          <Link to="/movies" className="">Movies</Link>
          <Link to="/movies" className="">Tv Show</Link>
          <Link to="/movies" className="">About</Link>
          <Link
            to="/movies"
            className="bg-primary bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold px-4 py-2 rounded-lg"
          >
            Browse Movies
          </Link>
        </div>
      </div>
    </nav>
  );
}