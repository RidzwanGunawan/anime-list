"use client";
import { FileSearch } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Notfound = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen max-w-xl mx-auto flex flex-col justify-center items-center">
      <div className="flex justify-center items-center gap-2">
        <FileSearch size={32} className="text-color-primary" />
        <h3 className="text-color-primary text-2xl font-bold">
          404 | Not Found
        </h3>
      </div>
      <button
        onClick={() => router.back()}
        className="text-color-primary text-lg font-semibold underline"
      >
        Go Back
      </button>
    </div>
  );
};

export default Notfound;
