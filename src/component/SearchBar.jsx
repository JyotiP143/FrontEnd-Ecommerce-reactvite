const SearchBar = ({ value, onChange }) => {
  return (
    <div className="mb-6">
      <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2">
        <span className="text-gray-500 text-xl">🔍</span>
        <input
          type="text"
          placeholder="Search products..."
          value={value}
          onChange={e => onChange(e.target.value)}
          className="bg-transparent ml-3 w-full outline-none"
        />
      </div>
    </div>
  );
}
export default SearchBar;