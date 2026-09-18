    import { useEffect } from 'react';
    import { IoCloseSharp } from "react-icons/io5";
    import { SlCalender } from "react-icons/sl";

    export default function MovieModal({ show, onClose }) {
    useEffect(() => {
        const handleKey = (e) => {
        if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKey);
        document.body.style.overflow = 'hidden';

        return () => {
        window.removeEventListener('keydown', handleKey);
        document.body.style.overflow = '';
        };
    }, [onClose]);

    return (
        <div
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
        <div
            onClick={(e) => e.stopPropagation()}
            className="bg-card rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
        >
            <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-black/70 hover:bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold"
            >
            <IoCloseSharp />
            </button>

            <img
            src={show.image?.original || 'https://via.placeholder.com/800x400'}
            alt={show.name}
            className="w-full h-64 sm:h-80 object-cover rounded-t-2xl"
            />

            <div className="p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">{show.name}</h2>

            <p className="text-gray-300 mb-2">
                ⭐ Rating: {show.rating?.average ?? 'N/A'} | <SlCalender /> Release:{' '}
                {show.premiered ?? 'N/A'}
            </p>

            <p className="text-gray-300 mb-6">
                🎭 {show.genres?.join(', ') || 'N/A'} | 🗣️{' '}
                {show.language || 'N/A'}
            </p>

            <h3 className="text-lg font-semibold text-primary mb-2">Overview:</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
                {show.summary?.replace(/<[^>]*>/g, '') || 'No description available.'}
            </p>

            <button
                onClick={onClose}
                className="px-6 py-2 bg-primary bg-red-700 text-white font-semibold py-3 rounded-lg"
            >
    <IoCloseSharp />
            </button>
            </div>
        </div>
        </div>
    );
    }