const Pagination = ({ current, totalPages, onChange }) => {
  return (
    <div className="flex justify-center gap-2 mt-10">
      <button
        className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
        disabled={current === 1}
        onClick={() => onChange(current - 1)}
      >
        Prev
      </button>

      <span className="px-4 py-2 font-medium">
        {current} / {totalPages}
      </span>

      <button
        className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
        disabled={current === totalPages}
        onClick={() => onChange(current + 1)}
      >
        Next
      </button>
    </div>
  );
}
export default Pagination;
