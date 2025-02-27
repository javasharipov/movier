import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="animate-pulse">
      <div className="w-full h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px] bg-gray-300 rounded-xl"></div>
      <div className="mt-2 h-4 bg-gray-300 rounded w-3/4"></div>
    </div>
  );
};

export default SkeletonLoader;