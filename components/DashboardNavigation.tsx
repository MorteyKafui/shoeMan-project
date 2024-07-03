"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Orders",
    href: "/dashboard/orders",
  },
  {
    name: "Products",
    href: "/dashboard/products",
  },
  {
    name: "Banner",
    href: "/dashboard/banner",
  },
];

const DashboardNavigation = () => {
  const pathname = usePathname();

  return (
    <>
      {links.map(({ href, name }) => (
        <Link
          href={href}
          key={name}
          className={cn(
            href === pathname
              ? "text-blue-600 font-bold border-b border-blue-600 transition-all duration-500 ease-in-out"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {name}
        </Link>
      ))}
    </>
  );
};

export default DashboardNavigation;
