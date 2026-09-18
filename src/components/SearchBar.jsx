
    import { CiSearch } from "react-icons/ci";

    export default function SearchBar({ value, onChange }) {
    return (
        <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full max-w-2xl mx-auto mb-10"
        >
        <div className="flex items-center gap-3 bg-card border border-white/200 rounded-full px-5 py-3 focus-within:border-primary transition">
            <span className="text-gray-400 text-lg"><CiSearch /></span>

            <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Search for a movie..."
            className="flex-1 bg-transparent text-black placeholder-gray-500 focus:outline-none"
            />

            {value && (
            <button
                type="button"
                onClick={() => onChange('')}
                className="text-gray-400 hover:text-white transition"
                aria-label="Clear"
            >
                ✕
            </button>
            )}
        </div>
        </form>
    );
    }