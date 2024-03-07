import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return <SignUp afterSignInUrl={"/dashboard"} />;
};

export default SignUpPage;
