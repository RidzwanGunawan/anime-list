import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";

const page = async () => {
  const user = await authUserSession();

  return (
    <div className="flex items-center justify-center h-screen text-color-primary">
      <div className="max-w-2xl p-4 bg-gray-100 rounded-lg flex items-center">
        <div className="mr-4">
          <Image
            src={user?.image}
            alt=".."
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Welcome</h3>
          <h3 className="text-xl">{user?.name}! Here&apos;s Your Dashboard.</h3>
          <div className="mt-5 flex gap-3">
            <Link
              href={"/users/dashboard/collection"}
              className="hover:text-color-accent transition-all"
            >
              My Collection
            </Link>
            <Link
              href={"/users/dashboard/comment"}
              className="hover:text-color-accent transition-all"
            >
              My Comment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
