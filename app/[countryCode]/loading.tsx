const Loading = () => {
  const skeletonStyle = { backgroundColor: "var(--skeleton)" };

  return (
    <div className="w-full p-8 my-6">
      {/* Back Button Skeleton */}
      <div
        style={skeletonStyle}
        className="h-10 w-28 rounded-lg shadow-lg animate-pulse mb-10"
      ></div>

      <div className="my-10 flex flex-col md:flex-row gap-10 md:gap-20 items-center">
        {/* Flag Skeleton */}
        <div
          style={skeletonStyle}
          className="w-full aspect-4/3 max-w-140 rounded-md shadow-md animate-pulse"
        ></div>

        {/* Details Skeleton */}
        <div className="flex flex-col gap-8 w-full">
          {/* Title */}
          <div
            style={skeletonStyle}
            className="h-10 w-1/3 rounded animate-pulse"
          ></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4">
            {/* Left Column */}
            <div className="flex flex-col gap-4">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  style={skeletonStyle}
                  className="h-5 w-3/4 rounded animate-pulse"
                ></div>
              ))}
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-4">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  style={skeletonStyle}
                  className="h-5 w-3/4 rounded animate-pulse"
                ></div>
              ))}
            </div>
          </div>

          {/* Borders Skeleton */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 mt-4">
            <div
              style={skeletonStyle}
              className="h-6 w-32 rounded animate-pulse"
            ></div>
            <div className="flex flex-wrap gap-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  style={skeletonStyle}
                  className="h-8 w-20 rounded-sm animate-pulse"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
