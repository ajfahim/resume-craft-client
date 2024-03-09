import { cn } from "@/lib/utils";
import DashboardNav from "./DashboardNav/DashboardNav";

const Sidebar = () => {
  return (
    <aside
      style={{ minHeight: "calc(100dvh - 56px)" }}
      className={cn("py-4 px-2")}
    >
      {<DashboardNav />}
    </aside>
  );
};

export default Sidebar;
