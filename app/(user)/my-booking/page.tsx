"use client";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useEffect, useState } from "react";
import PendingRequests from "./_components/PendingRequests";
import ApproveRequests from "./_components/ApproveRequests";
import { getRequestsByUser } from "@/server-action/request";
import { useSession } from "next-auth/react";
import { RequestModelType, UserModelType } from "@/types/model-type";

const page = () => {
  const { data: session } = useSession();
  const [requests, setRequests] = useState<RequestModelType[]>([]);
  const [pendingRequests, setPendingRequests] = useState<RequestModelType[]>(
    []
  );
  const [approveRequests, setApproveRequests] = useState<RequestModelType[]>(
    []
  );
  const userId = session?.user.id;
  useEffect(() => {
    setPendingRequests(
      requests.filter((request) => request.status === "pending")
    );
    setApproveRequests(
      requests.filter((request) => request.status === "accepted")
    );
  }, [requests]);

  useEffect(() => {
    if (!userId) return;
    const getData = async () => {
      try {
        const res = (await getRequestsByUser(userId)) as RequestModelType[];
        console.log(res);
        setRequests(res);
      } catch (error) {
        console.error("Error fetching requests:", error);
      }
    };
    getData();
    console.log(userId);
  }, [userId]);

  return (
    <div className="w-full h-full flex justify-center pb-5">
      <Card className="p-5 w-[90%]">
        <Tabs defaultValue="pending" className="">
          <TabsList className="">
            <TabsTrigger value="pending" className="px-5">
              Pending Requests
            </TabsTrigger>
            <TabsTrigger value="approve" className="px-5">
              Approve Requests
            </TabsTrigger>
          </TabsList>
          <TabsContent value="pending">
            <PendingRequests
              pendingRequests={pendingRequests}
              setPendingRequests={setPendingRequests}
            />
          </TabsContent>
          <TabsContent value="approve">
            <ApproveRequests
              approveRequests={approveRequests}
              setApproveRequests={setApproveRequests}
            />
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default page;
