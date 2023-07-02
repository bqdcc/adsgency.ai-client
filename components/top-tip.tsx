"use client";

import { cn } from "@/lib/utils";
import { Info, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLocalStorage } from "react-use";

export default function TopTip() {
  const [isCloseTip, setCloseTip] = useLocalStorage("close-tip");
  const [isShow, setShow] = useState(true);

  useEffect(() => {
    setShow(!isCloseTip);
  }, [isCloseTip]);

  return (
    <div
      className={cn([
        "relative flex h-[40px] items-center justify-center bg-[#f2d2ff] text-center",
        isShow ? "flex" : "hidden",
      ])}
    >
      <Info color="#c64ffd" />
      <Link
        href="https://adsgency.ai/"
        target="_blank"
        className="ml-[12px] underline"
      >
        Invite your friends and coworker
      </Link>
      <span>&nbsp;&nbsp;to earn credits</span>
      <button
        className="absolute right-3 cursor-pointer"
        onClick={() => {
          setCloseTip(true);
        }}
      >
        <X />
      </button>
    </div>
  );
}
