"use client";

import { useClerk } from "@clerk/nextjs";
import { Button } from "../ui/button";

const SignOutButton = () => {
  const { signOut } = useClerk();
  return (
    <Button variant="ghost" onClick={() => signOut()}>
      Sign Out
    </Button>
  );
};

export default SignOutButton;
