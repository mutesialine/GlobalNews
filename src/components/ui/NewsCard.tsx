export interface NewsCard {
  urlToImage: string;
  title: string;
  formattedTime: string;
}

const NewsCard = ({ urlToImage, title, formattedTime }: NewsCard) => {
  return (
    <div className="space-y-2 relative text-gray-900 flex flex-col item-center group hover:opacity-90 cursor-pointer">
      <img
        src={urlToImage}
        alt="image"
        className="object-cover h-[200px] group-hover:scale-105"
      />
      <div className="px-2 py-2 bottom-2">
        <p className="text-md gap-x-2 italic pt-2 font-bold hover:underline">
          {title}
        </p>
        <ul className="marker:text-slate-500 list-disc pl-5 space-y-3 text-slate-500 text-sm  italic pt-2">
          <li>{formattedTime}hours ago</li>
        </ul>
      </div>
    </div>
  );
};
export default NewsCard;
