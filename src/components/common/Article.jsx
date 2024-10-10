import Heading from "./Heading";
import Para from "./Para";
import Button from "./Button";
import propTypes from "prop-types";

const Article = ({ article }) => {
  return (
    <div className="border border-zinc-300 w-72 md:w-96 p-8 rounded-2xl">
      {article.img}
      <div className="mt-5 px-3 flex flex-col gap-3 items-start">
        <Heading text={article.title} fontSize="text-lg" />
        <Para text={article.description} fontSize="text-sm" />
        <Button
          text="Read More"
          fontSize="text-sm"
          textColor="text-[#424961]"
          borderWidth="border"
          borderColor="border-[#424961]"
        />
      </div>
    </div>
  );
};

Article.propTypes = {
  article: propTypes.shape({
    img: propTypes.element.isRequired,
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
  }).isRequired,
};

export default Article;
