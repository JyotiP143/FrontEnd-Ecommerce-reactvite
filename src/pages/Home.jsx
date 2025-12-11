import FilterSidebar from "../component/FilterSidebar";
import ProductGrid from "../component/ProductGrid";
import SearchBar from "../component/SearchBar";

export default function Home() {
  return (
    <div className="flex gap-6 p-6">
      <FilterSidebar />
      <div className="flex-1">
        <SearchBar />
        <ProductGrid />
      </div>
    </div>
  );
}
