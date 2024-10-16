"use client";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useEffect, useState } from "react";
import PendingRequests from "./_components/PendingRequests";
import ApproveRequests from "./_components/ApproveRequests";
import { getRequestsByUser } from "@/server-action/request";
import { useSession } from "next-auth/react";
import { RequestModelType, UserModelType } from "@/types/model-type";
import RejectedRequests from "./_components/RejectedRequests";
import EmptyBox from "./_components/EmptyBox";

const page = () => {
  const { data: session } = useSession();
  const [requests, setRequests] = useState<RequestModelType[]>([]);
  const [pendingRequests, setPendingRequests] = useState<RequestModelType[]>(
    []
  );
  const [approveRequests, setApproveRequests] = useState<RequestModelType[]>(
    []
  );
  const [rejectedRequests, setRejectedRequests] = useState<RequestModelType[]>(
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
    setRejectedRequests(
      requests.filter((request) => request.status === "rejected")
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
        <Tabs defaultValue="approved" className="">
          <TabsList className="">
            <TabsTrigger value="approved" className="px-5">
              Approved Requests
            </TabsTrigger>
            <TabsTrigger value="pending" className="px-5">
              Pending Requests
            </TabsTrigger>
            <TabsTrigger value="rejected" className="px-5">
              Rejected Requests
            </TabsTrigger>
          </TabsList>
          <TabsContent value="approved">
            {approveRequests.length === 0 ? (
              <EmptyBox text="At the moment, there are no approve booking" />
            ) : (
              <ApproveRequests
                approveRequests={approveRequests}
                setApproveRequests={setApproveRequests}
              />
            )}
          </TabsContent>
          <TabsContent value="pending">
            {pendingRequests.length === 0 ? (
              <EmptyBox text="At the moment, there are no pending requests" />
            ) : (
              <PendingRequests
                pendingRequests={pendingRequests}
                setPendingRequests={setPendingRequests}
              />
            )}
          </TabsContent>

          <TabsContent value="rejected">
            {rejectedRequests.length === 0 ? (
              <EmptyBox text="At the moment, there are no rejected requests" />
            ) : (
              <RejectedRequests
                rejectedRequests={rejectedRequests}
                setRejectedRequests={setRejectedRequests}
              />
            )}
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default page;
