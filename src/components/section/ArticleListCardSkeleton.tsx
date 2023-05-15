import NewsCardSkeleton from "../ui/NewsCardSkeleton";

const ArticleListCardSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-8 px-5 py-8 mb-10 sm:grid-cols-2 md:grid-cols-3 md:px-16">
      {Array(6)
        .fill(<NewsCardSkeleton />)
        .map((card, index) => (
          <div key={index}>{card}</div>
        ))}
    </div>
  );
};
export default ArticleListCardSkeleton;
