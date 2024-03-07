import "@/app/globals.css";
import Nav from "@/components/shared/Nav";
import { cn } from "@/lib/utils";
import { ClerkProvider, currentUser } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Resume Craft",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await currentUser();
  console.log("🚀 ~ user:", user);
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background container font-sans antialiased",
            fontSans.variable
          )}
        >
          <Nav user={user} />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
