import "@/app/globals.css";
import Sidebar from "@/components/shared/Sidebar";
import { currentUser } from "@clerk/nextjs";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();
  return (
    <span className="flex gap-4">
      <Sidebar />
      <main>{children}</main>
    </span>
  );
}
