"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={router.back}
      className="p-2 px-8 justify-center items-center font-sans text-base font-semibold cursor-pointer flex gap-4 bg-element rounded-lg shadow-lg hover:bg-hover hover:scale-105 transition-all duration-300"
      aria-label="Go back to previous page"
    >
      <ArrowLeft size={20} />
      Back
    </button>
  );
};

export default BackButton;
