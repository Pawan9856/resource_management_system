import { Button } from "@/components/ui/button";
import { logoutUser } from "@/server-action/user";
import React from "react";

const Profile = () => {
  return (
    <>
      <div>Profile</div>
      <form
        action={logoutUser}
      >
        <Button type="submit">Sign Out</Button>
      </form>
    </>
  );
};

export default Profile;
