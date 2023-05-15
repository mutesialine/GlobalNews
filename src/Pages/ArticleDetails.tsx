import moment from "moment";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const ArticleDetails = () => {
  const { state } = useLocation();
  const formattedTime = moment(state.publishedAt).format("h");
  return (
    <div className="px-12 pt-16 pb-10">
      <Link to="/" className="p-2 bg-gray-200 rounded-md hover:opacity-70">
        Back to Home
      </Link>
      <div className="flex flex-col gap-6 pt-4 text-black md:flex-row md:items-center">
        <div className="space-y-8">
          <p className="text-2xl font-bold text-red-800">{state.title}</p>
          <img
            src={state.urlToImage}
            alt="image"
            className="md:h-[500px] object-cover w-fit"
          />
        </div>
        <div className="flex flex-col gap-4 md:w-1/2">
          <p className="text-red-800">{state.source.name}</p>
          <p className="text-xl md:text-2xl">{state.description}</p>
          <div className="flex items-center px-4 py-2 text-white bg-red-800 rounded-md cursor-pointer gap-x-2 w-fit hover:opacity-90">
            <a href={state.url} target="_blank" className="text-lg">
              Read more
            </a>
            <BsArrowRight size={24} />
          </div>
          <ul className="pl-5 space-y-3 text-red-500 list-disc marker:text-red-500">
            <li>{formattedTime}hours ago</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
