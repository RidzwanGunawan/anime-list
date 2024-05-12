import Dashboard from "@/components/DashboardHeader";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Link from "next/link";
import React from "react";

const page = async () => {
  const user = authUserSession();
  const comments = await prisma.comment.findMany({
    where: { user_email: user.email },
  });

  if (comments.length === 0) {
    return (
      <section className="mt-4 px-4">
        <Dashboard title={"My Comments"} />
        <div className="flex flex-col text-center mt-48 h-screen gap-2">
          <p className="text-5xl">✖️</p>
          <p className="text-2xl text-color-primary">
            You haven&apos;t made a comment yet.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="mt-4 px-4">
      <Dashboard title={"My Comments"} />
      <div className="grid grid-cols-1 py-2 gap-4">
        {comments.map((comment) => {
          return (
            <Link
              href={`/anime/${comment.anime_mal_id}`}
              key={comment.id}
              className="bg-color-primary p-4"
            >
              <p className="text-sm">{comment.anime_title}</p>
              <p className="italic">{comment.comment}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default page;
