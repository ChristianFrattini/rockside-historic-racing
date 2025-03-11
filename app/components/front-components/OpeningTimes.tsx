import { Separator } from "@/components/ui/separator";
import { Clock } from "lucide-react";
import React from "react";

export default function OpeningTimes() {
  const openingTimes = [
    { day: "Monday", hours: "9:00 AM - 6:00 PM" },
    { day: "Tuesday", hours: "9:00 AM - 6:00 PM" },
    { day: "Wednesday", hours: "9:00 AM - 6:00 PM" },
    { day: "Thursday", hours: "9:00 AM - 8:00 PM" },
    { day: "Friday", hours: "9:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];
  return (
    <>
      <div className={"flex gap-3 flex-col "}>
        <div className={"flex items-center gap-3"}>
          <Clock className={"h-12 w-12"} />
          <h2 className={"text-2xl font-bold"}>Opening Times</h2>
        </div>

        <Separator className={"border-[3px] border-customRed rounded-xl"} />
        <div className="px-2 py-1">
          <table className="w-full">
            <tbody>
              {openingTimes.map((time, index) => (
                <tr
                  key={time.day}
                  className="hover:bg-gray-200 duration-100 rounded-md"
                >
                  <td className="px-2 py-1.5 text-sm sm:text-base text-gray-700 font-medium">
                    {time.day}
                  </td>
                  <td className="px-2 py-1 text-sm sm:text-base text-gray-600">
                    {time.hours}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
