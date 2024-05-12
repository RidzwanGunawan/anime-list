"use client";

import React, { useState } from "react";

export const CollectionButton = ({
  anime_mal_id,
  user_email,
  anime_image,
  anime_title,
}) => {
  const [isCreated, setIsCreated] = useState(false);
  const handleCollection = async (event) => {
    event.preventDefault();

    const data = { anime_mal_id, user_email, anime_image, anime_title };

    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const collection = await response.json();
    if (collection.isCreated) {
      setIsCreated(true);
    }
    return;
  };

  return (
    <>
      {isCreated ? (
        <p className="text-color-primary py-1 mt-2">
          Successfully Added To Collection
        </p>
      ) : (
        <button
          onClick={handleCollection}
          className="w-36 px-2 py-2 mt-2 bg-color-primary rounded-md"
        >
          Add To Collection
        </button>
      )}
    </>
  );
};
