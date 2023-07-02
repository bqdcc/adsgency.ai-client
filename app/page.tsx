"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useLocalStorage } from "react-use";

function TaskType() {
  const tasks = [
    {
      title: "Strategy Planning",
      icon: (
        <Image
          src="/images/strategy-planning.png"
          alt="Strategy Planning"
          width={60}
          height={60}
        />
      ),
      href: "/",
    },
    {
      title: "Content Creation",
      icon: (
        <Image
          src="/images/content-creation.png"
          alt="Content Creation"
          width={60}
          height={60}
        />
      ),
      href: "/",
    },
    {
      title: "Social Analytics",
      icon: (
        <Image
          src="/images/social-analytics.png"
          alt="Social Analytics"
          width={60}
          height={60}
        />
      ),
      href: "/",
    },
    {
      title: "Ads Managment",
      icon: (
        <Image
          src="/images/ads-managment.png"
          alt="Ads Managment"
          width={60}
          height={60}
        />
      ),
      href: "/",
    },
  ];

  return (
    <section className="w-full">
      <div className="text-center text-[2.5rem]">
        What agency tasks do you have today?
      </div>
      <div className="mt-[30px] flex items-center justify-center gap-[40px] bg-[#f6f6f6]">
        {tasks.map((item) => (
          <div
            key={item.title}
            className="flex h-[164px] w-[246px] cursor-pointer flex-col items-center justify-center gap-3 rounded-md border-2 border-[#e7e7e7] transition-all hover:shadow-md"
          >
            {item.icon}
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function RecentProjects() {
  return (
    <section className="mt-[60px]">
      <h1>Recent Projects (18)</h1>
      <div className="mt-[20px] flex w-full gap-[40px]">
        {Array.from({ length: 5 }).map((item, index) => (
          <Image
            key={index}
            src="/images/project-1.png"
            alt="project-1"
            width={268}
            height={104}
            className="cursor-pointer hover:shadow-md"
          />
        ))}
      </div>
    </section>
  );
}

function FromTheCommunity() {
  const types = [
    {
      title: "All",
    },
    {
      title: "Popular",
    },
    {
      title: "Recent",
    },
    {
      title: "Object",
    },
    {
      title: "Portrait",
    },
    {
      title: "Service",
    },
  ];

  const [active, setActive] = useState("All");

  return (
    <section className="mt-[40px]">
      <h1>From the community</h1>
      <div className="mt-[20px]">
        {types.map((item) => (
          <Button
            key={item.title}
            className={cn([
              "px-8",
              active === item.title ? "bg-[#cb4fff]" : "",
            ])}
            variant={active === item.title ? "default" : "ghost"}
            onClick={() => setActive(item.title)}
          >
            {item.title}
          </Button>
        ))}
      </div>
      <div className="mt-[20px] flex gap-[40px]">
        {Array.from({ length: 5 }).map((item, index) => (
          <Image
            key={index}
            src="/images/community-1.png"
            alt="community-1"
            width={270}
            height={270}
            className="cursor-pointer hover:shadow-md"
          />
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const [isCloseTip] = useLocalStorage("close-tip");

  const [isShow, setShow] = useState(true);

  useEffect(() => {
    setShow(!isCloseTip);
  }, [isCloseTip]);

  return (
    <main
      className={cn([
        "flex-1 overflow-y-auto bg-[#f9f9f9] px-[80px] py-[40px]",
        !isShow ? "max-h-[calc(100vh-70px)]" : "max-h-[calc(100vh-70px-40px)]",
      ])}
    >
      <TaskType />

      <RecentProjects />

      <FromTheCommunity />
    </main>
  );
}
