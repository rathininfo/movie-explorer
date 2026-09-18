
  import { SlCalender } from "react-icons/sl";

  export default function MovieCard({ show, onSeeDetails }) {
    return (
      <div className="bg-card rounded-xl overflow-hidden flex flex-col">
        <img
          src={show.image?.medium || 'https://via.placeholder.com/210x295'}
          alt={show.name}
          className="w-full h-72 object-cover"
        />

        <div className="p-4 flex flex-col flex-1">
          <h3 className="font-bold mb-2">{show.name}</h3>

          <p className="text-sm text-gray-400 mb-3">
            ⭐ {show.rating?.average ?? 'N/A'} • <SlCalender /> {show.premiered?.slice(0, 4) ?? 'N/A'}
          </p>

          <button
            onClick={onSeeDetails}
            className="mt-auto bg-primary hover:bg-red-700 py-2 rounded-lg text-sm font-semibold"
          >
            See Details
          </button>
        </div>
      </div>
    );
  }