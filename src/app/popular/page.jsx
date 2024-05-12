"use client";
import Card from "@/components/Card";
import HeaderMenu from "@/components/utilities/HeaderMenu";
import Pagination from "@/components/utilities/Pagination";
import { getAnimeResponse } from "@/libs/api-libs";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const popularAnime = await getAnimeResponse("anime", `page=${page}`);
    setTopAnime(popularAnime);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div>
      <HeaderMenu title={`Most Popular Anime #${page}`} />
      <Card api={topAnime} />
      <Pagination
        page={page}
        lastpage={topAnime.pagination?.last_visible_page}
        setpage={setPage}
      />
    </div>
  );
};

export default Page;
