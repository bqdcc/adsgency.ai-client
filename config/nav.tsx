import {
  BarChart4,
  CalendarCheck,
  Cast,
  FolderCog,
  ImagePlus,
  SquareSlash,
  Wand,
} from "lucide-react";

export type NavConfig = typeof NavConfig;

export const NavConfig = [
  {
    title: "Home",
    href: "/",
    icon: <Cast />,
  },
  {
    title: "Your Projects",
    href: "/your-projects",
    icon: <ImagePlus />,
  },
  {
    title: "Planning",
    href: "/planning",
    icon: <CalendarCheck />,
  },
  {
    title: "Generate",
    href: "/generate",
    icon: <SquareSlash />,
    children: [
      {
        title: "Text To Image",
        href: "/text-to-image",
      },
      {
        title: "Product Description",
        href: "/product-description",
      },
      {
        title: "Product Email",
        href: "/product-email",
      },
    ],
  },
  {
    title: "Social Insights",
    href: "/social-insights",
    icon: <BarChart4 />,
  },
  {
    title: "Ads Management",
    href: "/ads-management",
    icon: <FolderCog />,
  },
  {
    title: "Optimization Tools",
    href: "/optimization-tools",
    icon: <Wand />,
  },
];
