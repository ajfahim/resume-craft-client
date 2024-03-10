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
    <span className="grid grid-cols-[250px_1fr] gap-8">
      <Sidebar />
      <main className="mt-8">{children}</main>
    </span>
  );
}
