const Loading = () => {
  const skeletonStyle = { backgroundColor: "var(--skeleton)" };
  return (
    <div className="p-8 md:p-10">
      <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between mb-12">
        {/* Search Input Skeleton */}
        <div
          style={skeletonStyle}
          className="h-14 w-full md:w-1/2 lg:w-1/3 rounded-md shadow-md animate-pulse"
        ></div>
        {/* Filter Dropdown Skeleton */}
        <div
          style={skeletonStyle}
          className="h-14 w-48 rounded-md shadow-md animate-pulse self-start md:self-auto"
        ></div>
      </div>

      {/* Country Cards Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-14 px-2 sm:px-4">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="flex flex-col rounded-lg overflow-hidden shadow-lg h-80"
          >
            {/* Image Skeleton */}
            <div
              style={skeletonStyle}
              className="h-40 w-full animate-pulse"
            ></div>

            {/* Content Skeleton */}
            <div className="flex flex-col p-6 gap-4 bg-element grow">
              {/* Title */}
              <div
                style={skeletonStyle}
                className="h-6 w-3/4 rounded animate-pulse mb-2"
              ></div>

              {/* Details */}
              <div className="flex flex-col gap-2">
                <div
                  style={skeletonStyle}
                  className="h-4 w-1/2 rounded animate-pulse"
                ></div>
                <div
                  style={skeletonStyle}
                  className="h-4 w-1/2 rounded animate-pulse"
                ></div>
                <div
                  style={skeletonStyle}
                  className="h-4 w-1/2 rounded animate-pulse"
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
