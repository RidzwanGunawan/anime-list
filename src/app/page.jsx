import Card from "../components/Card";
import Header from "@/components/Header";
import {
  getAnimeResponse,
  getNestedAnimeRespon,
  reproduce,
} from "@/libs/api-libs";

const page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  let recommendedAnime = await getNestedAnimeRespon(
    "recommendations/anime",
    "entry"
  );

  recommendedAnime = reproduce(recommendedAnime, 8);

  return (
    <>
      <section>
        <Header
          title="Popular Anime"
          linkTitle="See More"
          linkHref="/popular"
        />
        <Card api={topAnime} />
      </section>
      <section>
        <Header title="Recommendation Anime" />
        <Card api={recommendedAnime} />
      </section>
    </>
  );
};

export default page;
