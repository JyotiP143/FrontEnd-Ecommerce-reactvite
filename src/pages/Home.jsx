import { useState } from "react";
import FilterSidebar from "../component/FilterSidebar";
import ProductGrid from "../component/ProductGrid";
import SearchBar from "../component/SearchBar";

const Home =()=> {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  return (
    <div className="max-w-7xl mx-auto p-6 flex gap-6">
      <FilterSidebar selected={category} setSelected={setCategory} />

      <div className="flex-1">
        <SearchBar value={search} onChange={setSearch} />
        <ProductGrid search={search} category={category} />
      </div>
    </div>
  );
}
export default Home;
