import { Article } from "../../interfaces/interface";
const ImageCard = ({ urlToImage }: Article) => {
  return (
    <div>
      <img
        src={urlToImage}
        alt="image"
        className="object-cover w-[300px] h-[100px] group-hover:scale-105"
      />
    </div>
  );
};

export default ImageCard;
