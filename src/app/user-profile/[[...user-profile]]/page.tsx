import { UserProfile } from "@clerk/nextjs";

const UserProfilePage = () => (
  <div className="w-full my-20 flex items-center justify-center">
    <UserProfile path="/user-profile" routing="path" />
  </div>
);

export default UserProfilePage;
