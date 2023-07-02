"use client";

import { Button, buttonVariants } from "./ui/button";
import { NavConfig } from "@/config/nav";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { LogOut } from "lucide-react";

export default function SlideNav() {
  const pathname = usePathname();
  return (
    <nav className="flex  w-[265px] flex-col bg-[#242424] pb-[30px] pl-[12px] pr-[28px] pt-[40px]">
      <Accordion type="single" collapsible className="w-full flex-1 space-y-4">
        {NavConfig.map((item) => (
          <AccordionItem value={item.title} className="border-b-0">
            <AccordionTrigger
              className={cn([
                buttonVariants({
                  variant: pathname.startsWith(item.href) ? "default" : "ghost",
                  className: "w-full justify-start gap-3",
                }),
                pathname.startsWith(item.href)
                  ? "bg-gradient-to-r from-violet-500  via-purple-500 to-fuchsia-500"
                  : "",
                "text-white hover:no-underline",
              ])}
            >
              {!!item.icon && item.icon}
              {item.title}
              {!!item.children && (
                <ChevronDownIcon className="AccordionChevron" aria-hidden />
              )}
            </AccordionTrigger>
            {!!item.children && (
              <AccordionContent>
                {item.children.map((chil) => (
                  <Button
                    className={cn([
                      "mt-3 w-full justify-start gap-3 text-white",
                      pathname.startsWith(item.href)
                        ? "bg-gradient-to-r from-violet-500  via-purple-500 to-fuchsia-500"
                        : "",
                    ])}
                    variant={
                      pathname.startsWith(item.href) ? "default" : "ghost"
                    }
                  >
                    {chil.title}
                  </Button>
                ))}
              </AccordionContent>
            )}
          </AccordionItem>
        ))}
      </Accordion>
      <div className="space-y-5">
        <Image
          src="/images/7DayTrial.png"
          alt="7DayTrial"
          width={233}
          height={104}
        />
        <Button variant="ghost" className="text-white hover:bg-[#242424] ml-2 hover:text-white">
          <LogOut className="mr-3 h-5 w-5" />
          <span>LOG OUT</span>
        </Button>
        <div className="text-white text-[12px] ml-5">Made with 💜 in San Francisco</div>
      </div>
    </nav>
  );
}
