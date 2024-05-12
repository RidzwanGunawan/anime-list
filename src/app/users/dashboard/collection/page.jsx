import Dashboard from "@/components/DashboardHeader";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Image from "next/image";
import Link from "next/link";

const page = async () => {
  const user = await authUserSession();
  const collection = await prisma.collection.findMany({
    where: { user_email: user?.email },
  });

  console.log({ collection });

  return (
    <section className="mt-4 px-4">
      <Dashboard title={"My Collection"} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {collection.map((collect, index) => {
          return (
            <Link
              key={index}
              href={`/anime/${collect.anime_mal_id}`}
              className="relative border-2 border-color-primary"
            >
              <Image
                src={collect.anime_image}
                alt={collect.anime_image}
                width={350}
                height={350}
              />
              <div className="absolute flex justify-center items-center bottom-0 w-full bg-color-primary h-16">
                <h5 className="text-xl text-center">{collect.anime_title}</h5>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default page;
