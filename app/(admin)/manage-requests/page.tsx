"use client";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { getAllRequests } from "@/server-action/request";
import { RequestType } from "@/types/model-type";
import { set } from "mongoose";
import React, { useEffect, useState } from "react";
import RequestCard from "./_components/RequestCard";
import EmptyBox from "./_components/EmptyBox";

const page = () => {
  const [allRequests, setAllRequests] = useState<RequestType[]>([]);
  const [pendingRequests, setPendingRequests] = useState<RequestType[]>([]);
  useEffect(() => {
    const getData = async () => {
      const res = (await getAllRequests()) as RequestType[];
      setAllRequests(res);
    };
    getData();
  }, []);
  useEffect(() => {
    setPendingRequests(
      allRequests.filter((request) => request.status === "pending")
    );
  }, [allRequests]);
  return (
    <div className="flex justify-center w-full h-full pb-5">
      <Card className=" md:w-[90%] p-5">
        {pendingRequests.length === 0 ? (
          <EmptyBox />
        ) : (
          <RequestCard
            pendingRequests={pendingRequests}
            setPendingRequests={setPendingRequests}
          />
        )}
      </Card>
    </div>
  );
};

export default page;
