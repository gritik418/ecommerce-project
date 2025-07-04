const ProductListingFallback = () => {
  return (
    <div className="flex min-h-screen bg-blue-50/50">
      <div className="flex container gap-6 mx-auto py-12 w-full">
        <div className="hidden sm:flex w-[380px]">
          <div className="w-full space-y-4 animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-1/2" />
            <div className="h-64 bg-gray-200 rounded" />
          </div>
        </div>

        <div className="flex flex-col grow p-1 w-full gap-5">
          <div className="h-10 bg-gray-200 rounded w-1/3 animate-pulse" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div
                key={idx}
                className="p-4 bg-white rounded shadow animate-pulse"
              >
                <div className="h-40 bg-gray-200 rounded mb-4" />
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListingFallback;
