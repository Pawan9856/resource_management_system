import { Dispatch, SetStateAction } from "react";
import { UserModelType } from "@/types/model-type";
import { Card } from "@/components/ui/card";

const AllUsers = ({
  verifiedUser,
  setVerifiedUser,
}: {
  verifiedUser: UserModelType[];
  setVerifiedUser: Dispatch<SetStateAction<UserModelType[]>>;
}) => {
  return (
    <div className="w-full flex flex-col gap-5 h-[600px] overflow-auto">
      {verifiedUser.map((user, index) => (
        <Card key={index} className="w-full px-5 py-2 flex flex-col gap-1">
          <div className="flex gap-3">
            <span >User Name :</span>
            <span className="text-muted-foreground">{user.name}</span>
          </div>
          <div className="flex gap-3">
            <span >Email ID :</span>
            <span className="text-muted-foreground">{user.email}</span>
          </div>
          <div className="flex gap-3">
            <span >Role :</span>
            <span className="text-muted-foreground">{user.role}</span>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default AllUsers;
