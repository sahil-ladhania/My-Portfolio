import {
  IconHome,
  IconInfoCircle,
  IconPackage,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";

export const dockItems = [
  {
    title: "Home",
    icon: <IconHome className="h-4 w-4" />,
    href: "/",
  },
  {
    title: "About",
    icon: <IconInfoCircle className="h-4 w-4" />,
    href: "/about",
  },
  {
    title: "Products",
    icon: <IconPackage className="h-4 w-4" />,
    href: "/products",
  },
  {
    title: "Contact",
    icon: <IconPhone className="h-4 w-4" />,
    href: "/contact",
  },
  {
    title: "Github",
    icon: <IconBrandGithub className="h-4 w-4" />,
    href: "https://github.com/sahil-ladhania",
  },
  {
    title: "LinkedIn",
    icon: <IconBrandLinkedin className="h-4 w-4" />,
    href: "https://www.linkedin.com/in/sahil-ladhania/",
  },
  {
    title: "Twitter",
    icon: <IconBrandTwitter className="h-4 w-4" />,
    href: "https://x.com/SahilLadhania",
  },
  {
    title: "Gmail",
    icon: <IconMail className="h-4 w-4" />,
    href: "mailto:sahilladhania5@example.com",
  },
];