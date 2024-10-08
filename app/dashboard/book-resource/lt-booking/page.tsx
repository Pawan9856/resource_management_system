"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import DatePicker from "./_components/DatePicker";
import TimePickerDemo from "./_components/TimePicker";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { InputForm } from "./_components/Form";

const page = () => {
  const [date, setDate] = useState<Date>();
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(date, startTime, endTime, description);
  };
  return (
    <div className="w-full flex justify-center">
      <Card className="w-4/5">
        <CardHeader>LT Booking</CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid grid-cols-12 gap-5">
            <div className="col-span-12 flex flex-col gap-2">
              <Label htmlFor="date">Date</Label>
              <DatePicker date={date} setDate={setDate} />
            </div>
            <div className="col-span-6 flex flex-col gap-2">
              <Label htmlFor="startTime">Start</Label>
              <TimePickerDemo onChange={setStartTime} />
            </div>
            <div className="col-span-6 flex flex-col gap-2">
              <Label htmlFor="endTime">End</Label>
              <TimePickerDemo onChange={setEndTime} />
            </div>
            <div className="col-span-12 flex flex-col gap-2">
              <Label htmlFor="time">Description</Label>

              <Textarea
                placeholder="Reason for booking...."
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </CardContent>
      </Card>
      {/* <InputForm/> */}
    </div>
  );
};

export default page;
