"use client";

import React, { useState, useRef, useEffect } from "react";
import { Clock } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface TimePickerProps {
  onChange?: (time: string) => void;
}

interface ScrollableSelectProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

type TimeUnit = "hour" | "minute";
type TimePeriod = "AM" | "PM";

const generateTimeOptions = (unit: TimeUnit): string[] => {
  const length = unit === "hour" ? 12 : 60;
  return Array.from({ length }, (_, i) => {
    const value = unit === "hour" ? i + 1 : i;
    return value.toString().padStart(2, "0");
  });
};

const TimePicker = ({ onChange }: TimePickerProps) => {
  const [hour, setHour] = useState<string>("12");
  const [minute, setMinute] = useState<string>("00");
  const [period, setPeriod] = useState<TimePeriod>("AM");

  const hours: string[] = generateTimeOptions("hour");
  const minutes: string[] = generateTimeOptions("minute");

  const handleTimeChange = (): void => {
    const time = `${hour}:${minute} ${period}`;
    onChange && onChange(time);
  };

  const ScrollableSelect: React.FC<ScrollableSelectProps> = ({
    options,
    value,
    onChange,
    placeholder,
  }) => {
    const listRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (listRef.current) {
        const selectedItem = listRef.current.querySelector(
          `[data-value="${value}"]`
        ) as HTMLElement;
        if (selectedItem) {
          selectedItem.scrollIntoView({ block: "nearest" });
        }
      }
    }, [value]);

    return (
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-[70px]">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent ref={listRef} className="h-[200px] overflow-auto">
          {options.map((option) => (
            <SelectItem key={option} value={option} className="py-2">
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-[240px] justify-start text-left font-normal"
        >
          <Clock className="mr-2 h-4 w-4" />
          {hour}:{minute} {period}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[240px] p-0" align="start">
        <style jsx global>{`
          .scrollable-select .select-content {
            height: 200px;
            overflow-y: auto;
          }
          .scrollable-select .select-item {
            padding-top: 8px;
            padding-bottom: 8px;
          }
        `}</style>
        <div className="flex p-2 scrollable-select">
          <ScrollableSelect
            options={hours}
            value={hour}
            onChange={(value: string) => {
              setHour(value);
              handleTimeChange();
            }}
            placeholder="HH"
          />
          <span className="mx-2 text-2xl">:</span>
          <ScrollableSelect
            options={minutes}
            value={minute}
            onChange={(value: string) => {
              setMinute(value);
              handleTimeChange();
            }}
            placeholder="MM"
          />
          <Select
            value={period}
            onValueChange={(value: TimePeriod) => {
              setPeriod(value);
              handleTimeChange();
            }}
          >
            <SelectTrigger className="w-[70px] ml-2">
              <SelectValue placeholder="AM/PM" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="AM">AM</SelectItem>
              <SelectItem value="PM">PM</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </PopoverContent>
    </Popover>
  );
};
export default TimePicker;