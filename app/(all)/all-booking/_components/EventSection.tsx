import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { format } from "date-fns";
import { RequestType } from "@/types/model-type";
import { MdEventAvailable } from "react-icons/md";

const EventSection = ({ showlist }: { showlist: RequestType[] }) => {
  return (
    <>
      <div className="flex flex-col gap-5 overflow-y-auto h-96">
        {showlist.map((item, index) => (
          <Card key={index} className="">
            <CardContent className="flex gap-3 p-3 text-sm">
              <div className="">
                <MdEventAvailable className="w-16 h-16 mr-3 text-muted-foreground"/>
              </div>
              <div className="flex flex-col">
                <div className="flex gap-3">
                  <span className="font-semibold text-muted-foreground">Booked Resource : </span>
                  <span>{item.resourceName}</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-muted-foreground">Time : </span>
                  <span>
                    {item.startTime} - {item.endTime}
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className=" font-semibold text-muted-foreground">Booked By :</span>
                  <span>{item.createdBy?.name}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default EventSection;
