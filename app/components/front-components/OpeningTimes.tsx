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
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <Clock className="h-8 w-8 sm:h-12 sm:w-12" />{" "}
          <h2 className="text-xl sm:text-2xl font-bold">Opening Times</h2>{" "}
        </div>

        {/* Separator */}
        <Separator className="border-[2px] border-customRed rounded-xl" />

        <div className="px-2 py-1 bg-customGrayBackground/10 rounded-md">
          <table className="w-full">
            <tbody>
              {openingTimes.map((time, index) => (
                <tr
                  key={time.day}
                  className="hover:bg-gray-300 duration-100 rounded-md"
                >
                  {/* Day Column */}
                  <td className="px-2 py-1.5 text-xs sm:text-base text-gray-700 font-medium whitespace-nowrap">
                    {time.day}
                  </td>
                  {/* Hours Column */}
                  <td className="px-2 py-1 text-xs sm:text-base text-gray-600 whitespace-nowrap">
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
