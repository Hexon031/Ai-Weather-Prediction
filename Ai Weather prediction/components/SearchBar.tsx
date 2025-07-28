
import React from 'react';

interface SearchBarProps {
  city: string;
  setCity: (city: string) => void;
  onSearch: () => void;
  loading: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ city, setCity, onSearch, loading }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-lg mx-auto">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter a city name (e.g., London)"
        className="flex-grow bg-slate-700/50 border border-slate-600 rounded-md py-3 px-4 text-white placeholder-slate-400 focus:ring-2 focus:ring-sky-500 focus:outline-none transition duration-200"
        disabled={loading}
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-sky-600 hover:bg-sky-500 disabled:bg-slate-600 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-md transition duration-200 flex items-center justify-center"
      >
        {loading ? (
          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        ) : (
          'Search'
        )}
      </button>
    </form>
  );
};

export default SearchBar;
