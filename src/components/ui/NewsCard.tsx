import { Article } from "../../interfaces/interface";

const NewsCard = ({ urlToImage, title, publishedAt }: Article) => {
  return (
    <div className="relative flex flex-col space-y-2 text-gray-900 cursor-pointer item-center group hover:opacity-90">
      <img
        src={urlToImage}
        alt="image"
        className="object-cover h-[200px] group-hover:scale-105"
      />
      <div className="px-2 py-2 bottom-2">
        <p className="pt-2 italic font-bold text-md gap-x-2 hover:underline">
          {title}
        </p>
        <ul className="pt-2 pl-5 space-y-3 text-sm italic list-disc marker:text-slate-500 text-slate-500">
          <li>{publishedAt}hours ago</li>
        </ul>
      </div>
    </div>
  );
};
export default NewsCard;
