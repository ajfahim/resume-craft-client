import { UserButton } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
import Link from "next/link";
import { Button } from "../ui/button";

type NavProps = {
  user: User | null;
};

const Nav = ({ user }: NavProps) => {
  console.log("🚀 ~ Nav ~ user:", user);
  return (
    <nav className="f-full bg-accent flex justify-between h-14 items-center px-5">
      <h1 className="text-2xl font-bold text-primary">Resume Craft</h1>
      <span>
        {user != null ? (
          <UserButton afterSignOutUrl="/sign-in" />
        ) : (
          <span className="space-x-2">
            <Link href={"/sign-in"}>
              <Button>Sign In</Button>
            </Link>
            <Link href={"/sign-up"}>
              <Button>Sign Up</Button>
            </Link>
          </span>
        )}
      </span>
    </nav>
  );
};

export default Nav;
