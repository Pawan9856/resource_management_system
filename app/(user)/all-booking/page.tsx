"use client";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getAllRequests } from "@/server-action/request";
import {
  RequestModelType,
  RequestType,
  UserModelType,
} from "@/types/model-type";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import EventSection from "./_components/EventSection";

const page = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [list, setList] = useState<RequestType[]>([]);
  const [showlist, setShowList] = useState<RequestType[]>([]);
  useEffect(() => {
    const getData = async () => {
      const res = (await getAllRequests()) as RequestType[];
      const approvedRequests = res.filter(
        (request) => request.status === "accepted"
      );
      setList(approvedRequests);
    };
    getData();
  }, []);
  useEffect(() => {
    if (date == undefined) setShowList([]);
    else {
      setShowList(
        list.filter(
          (item) =>
            format(item.date, "yyyy-MM-dd") === format(date, "yyyy-MM-dd")
        )
      );
    }
  }, [date, list]);

  return (
    <div className="w-full flex justify-center ">
      <Card className="w-[90%] min-h-[80vh]">
        <CardHeader></CardHeader>
        <CardContent className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div className="flex justify-center items-start lg:col-span-6 col-span-12">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md"
              showOutsideDays={false}
              classNames={{
                cell: "md:mx-3 md:my-2 m-2 h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                head_cell:
                  "md:mx-3 md:my-2 m-2 text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
              }}
            />
          </div>
          <div className="hidden lg:flex justify-start items-center">
            <Separator orientation="vertical" />
          </div>
          <div className="flex lg:hidden justify-start items-center col-span-12">
            <Separator />
          </div>

          <div className="col-span-12 w-full lg:col-span-5 flex flex-col gap-5 ">
            {date && (
              <h1 className="font-semibold text-lg">
                Schedule for {format(date, "MMM dd, yyyy")}
              </h1>
            )}
            <EventSection showlist={showlist} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
