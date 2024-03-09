import {
  LayoutDashboard,
  LucideIcon,
  LucideSettings,
  LucideUserCheck,
} from "lucide-react";

export type TDashboardNavItems = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const dashboardNavItems: TDashboardNavItems[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Generate Cover Letter",
    href: "/generate-cover-letter",
    icon: LucideSettings,
  },
  {
    label: "Personal Details",
    href: "/personal-details",
    icon: LucideUserCheck,
  },
];
