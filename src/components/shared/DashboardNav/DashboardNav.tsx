"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { dashboardNavItems } from "./DashboardNav.constant";

const DashboardNav = () => {
  const pathName = usePathname();
  return (
    <nav className="">
      {dashboardNavItems.map((item, index) => (
        <Link key={index} href={item.href}>
          <span
            className={cn(
              "flex gap-3 px-4 py-4 text-sm rounded-sm hover:bg-accent hover:text-accent-foreground",
              pathName === item.href
                ? "bg-accent text-accent-foreground"
                : "bg-transparent"
            )}
          >
            <item.icon className="text-primary size-5" />
            <span className="">{item.label}</span>
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default DashboardNav;
