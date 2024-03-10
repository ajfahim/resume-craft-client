import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SignOutButton } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
import { LayoutDashboard, LogOut, User2 } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ThemeToggle } from "./ThemeToggle";

type NavProps = {
  user: User | null;
};

const Nav = ({ user }: NavProps) => {
  return (
    <nav className=" border-b-2 border-accent flex justify-between h-20 items-center px-5">
      <h1 className="text-2xl font-bold">
        <Link href="/">
          Resume<span className="text-primary">Craft</span>
        </Link>
      </h1>
      <span className="flex gap-2">
        <ThemeToggle />
        {user != null ? (
          <>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar>
                  {/* <UserButton afterSignOutUrl="/sign-in" /> */}

                  <AvatarImage src={user.imageUrl} />
                  <AvatarFallback className="uppercase bg-primary text-primary-foreground">
                    {`${user.firstName?.slice(0, 1)}${user.lastName?.slice(
                      0,
                      1
                    )}`}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="font-bold" align="center">
                <DropdownMenuItem>
                  <Link className="flex gap-3" href={"/user-profile"}>
                    <User2 className="text-primary" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link className="flex gap-3" href={"/dashboard"}>
                    <LayoutDashboard className="text-primary" />
                    <span>Dashboard</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="space-x-3">
                  <LogOut className="text-primary" />
                  <SignOutButton />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : (
          <span className="space-x-2">
            <Link href={"/sign-in"}>
              <Button>Sign In</Button>
            </Link>
            <Link href={"/sign-up"}>
              <Button variant="secondary">Sign Up</Button>
            </Link>
          </span>
        )}
      </span>
    </nav>
  );
};

export default Nav;
