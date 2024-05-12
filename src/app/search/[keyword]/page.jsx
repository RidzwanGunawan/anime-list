import Card from "@/components/Card";
import Header from "@/components/Header";
import { getAnimeResponse } from "@/libs/api-libs";

const page = async ({ params }) => {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);
  const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`);

  return (
    <>
      <section>
        <Header title={`Search for ${decodedKeyword}`} />
        <Card api={searchAnime} />
      </section>
    </>
  );
};

export default page;
