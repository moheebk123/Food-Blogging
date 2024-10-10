import Article from "../components/common/Article";
import Container from "../components/common/Container";
import Heading from "../components/common/Heading";
import Section from "../components/common/Section";
import articles from "../data/articles";
import leftButton from "../assets/left-button.png";
import rightButton from "../assets/right-button.png";
import { useEffect, useState } from "react";

const Articles = () => {
  const [pages, setPages] = useState(Math.ceil(articles.length / 3));
  const [currPage, setCurrPage] = useState(1);

  useEffect(() => {
    setPages(Math.ceil(articles.length / 3));
    setCurrPage(1);
  }, [pages]);

  const handlePageChange = (change) => {
    if (change === "prev" && currPage > 1) {
      setCurrPage((prev) => prev - 1);
    } else if (change === "next" && currPage < pages) {
      console.log(currPage);
      setCurrPage((prev) => prev + 1);
    }
  };

  return (
    <Section className="p-20">
      <Container classes="text-left p-5">
        <Heading text="Latest Articles" fontSize="text-4xl" />
        <div className="mt-10 grid place-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {articles
            .slice((currPage - 1) * 3, currPage * 3)
            .map((article, index) => (
              <Article key={index} article={article} />
            ))}
        </div>

        <div className="mx-auto w-fit my-10 flex justify-center items-center gap-3">
          <img
            className="cursor-pointer"
            src={leftButton}
            alt="Previous Page"
            onClick={() => handlePageChange("prev")}
          />
          <span>
            {currPage}/{pages}
          </span>
          <img
            className="cursor-pointer"
            src={rightButton}
            alt="Next Page"
            onClick={() => handlePageChange("next")}
          />
        </div>
      </Container>
    </Section>
  );
};

export default Articles;
