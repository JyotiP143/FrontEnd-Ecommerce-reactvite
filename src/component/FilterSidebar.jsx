import categories from "../data/categories";

const FilterSidebar = ({ selected, setSelected }) => {
  return (
    <div className="w-60 p-5 bg-white shadow rounded-xl h-fit hidden md:block">
      <h3 className="text-lg font-semibold mb-4">Filters</h3>

      {/* Categories */}
      <div className="mb-6">
        <h4 className="font-medium mb-2">Category</h4>
        {categories.map(cat => (
          <label key={cat} className="flex items-center gap-2 mb-2 cursor-pointer">
            <input
              type="radio"
              name="category"
              value={cat}
              checked={selected === cat}
              onChange={() => setSelected(cat)}
            />
            <span>{cat}</span>
          </label>
        ))}
      </div>

      {/* Clear Filter */}
      <button
        className="w-full py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
        onClick={() => setSelected("")}
      >
        Clear Filters
      </button>
    </div>
  );
}
export default FilterSidebar;