"use client";

import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import {
  AlignJustify,
  BellDot,
  ChevronDown,
  CreditCard,
  LogOut,
  User,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b-2 border-b-[#9e2aff] bg-white text-[#333333] shadow-md">
      <div className="container flex h-[70px] items-center space-x-4 sm:justify-between sm:space-x-0">
        <AlignJustify className="cursor-pointer" />
        <Link href="/">
          <Image
            src={"/images/icon.png"}
            alt={"icon"}
            width={177}
            height={48}
            className="ml-5"
          />
        </Link>
        <div className="flex flex-1 items-center justify-start space-x-4">
          <nav className="flex items-center space-x-1">
            {siteConfig.mainNav.map((item) => (
              <Link key={item.title} href={item.href}>
                <div
                  className={cn(
                    buttonVariants({
                      size: "lg",
                      variant: "link",
                      className: "items-center gap-2",
                    }),
                    "text-[#333333] hover:text-[#745040] hover:no-underline"
                  )}
                >
                  <span className="text-[20px]">{item.title}</span>
                </div>
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Button className="bg-gradient-to-r from-violet-500 via-purple-500  to-fuchsia-500">
            Create new project
          </Button>
          <Button className="bg-gradient-to-r from-violet-500 via-purple-500  to-fuchsia-500 px-2">
            <BellDot />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="gap-2 bg-white px-2 text-[#333] hover:bg-slate-100">
                <Avatar className="h-[26px] w-[26px]">
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
                    alt="@shadcn"
                  />
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>
                Carter Studios
                <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-46">
              <DropdownMenuItem className="cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                <span>PROFILE</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <CreditCard className="mr-2 h-4 w-4" />
                <span>PRICING</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <LogOut className="mr-2 h-4 w-4" />
                <span>LOG OUT</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
