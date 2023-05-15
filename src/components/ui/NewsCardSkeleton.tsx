const NewsCardSkeleton = () => {
  return (
    <div className="overflow-hidden rounded-md shadow-md animate-pulse">
      <div className="h-56 bg-gray-300"></div>
      <div className="p-4">
        <div className="h-4 mb-2 bg-gray-300"></div>
        <div className="h-4 bg-gray-300"></div>
      </div>
    </div>
  );
};

export default NewsCardSkeleton;
