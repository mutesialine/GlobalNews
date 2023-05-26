import { useGetSourcesQuery } from "../../features/apiSlice";
import { choosePublisher } from "../../features/news";
import { useAppDispatch } from "../../hooks/storeHooks";
import { Publisher } from "../../interfaces/interface";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { data } = useGetSourcesQuery(null);

  const newsCategory: Publisher[] = data?.sources;
  const handleSelectedCategories = async (category: string | null) => {
    dispatch(choosePublisher(category));
  };

  const categories = newsCategory.map((element?) => element?.category);
  const uniqueCategories = [...new Set(categories)];
  return (
    <div className="flex flex-col p-6 pb-3 text-black bg-white border shadow-md w-fit">
      {uniqueCategories.map((category, index) => (
        <p
          key={index}
          className="font-bold underline cursor-pointer hover:text-blue-700 shrink-0"
          onClick={() => handleSelectedCategories(category)}
        >
          {category}
        </p>
      ))}
    </div>
  );
};

export default Categories;
