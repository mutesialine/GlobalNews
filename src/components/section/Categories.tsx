import { useAppSelector } from "../../hooks/storeHooks";

const Categories = () => {
  const { newsPublisher } = useAppSelector((state) => state.news);
  const categories = newsPublisher.map((element?) => element?.category);

  const uniqueCategories = [...new Set(categories)];
  return (
    <div className="flex flex-col p-6 pb-3 text-black bg-white border shadow-md w-fit">
      {uniqueCategories.map((category, index) => (
        <p
          key={index}
          className="font-bold underline cursor-pointer hover:text-blue-700 shrink-0"
        >
          {category}
        </p>
      ))}
    </div>
  );
};

export default Categories;
