import { Article } from "../../interfaces/interface";

const NewsCard = ({ urlToImage, title, publishedAt }: Article) => {
  return (
    <div className="relative flex flex-col space-y-2 text-white cursor-pointer item-center group hover:opacity-90">
      <img
        src={urlToImage}
        alt="image"
        className="relative object-cover w-[800px] h-[400px]"
      />
      <div className="absolute left-0 right-0 w-4/5 px-16 bottom-24">
        <p className="text-2xl font-bold gap-x-2 hover:underline">{title}</p>
        <ul className="pt-2 pl-5 space-y-3 text-sm text-white list-disc marker:text-white">
          <li>{publishedAt}hours ago</li>
        </ul>
      </div>
    </div>
  );
};
export default NewsCard;
