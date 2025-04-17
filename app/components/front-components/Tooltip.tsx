"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

interface TooltipProps {
  children: React.ReactNode;
}

export default function Tooltipp({ children }: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const isMobile = useIsMobile();
  const tooltipRef = useRef<HTMLDivElement>(null);

  const showTooltip = () => !isMobile && setVisible(true);
  const hideTooltip = () => !isMobile && setVisible(false);
  const toggleTooltip = () => setVisible((prev) => !prev);

  // Outside click to close (only on mobile)
  useEffect(() => {
    if (!visible || !isMobile) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node)
      ) {
        setVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [visible, isMobile]);

  return (
    <div ref={tooltipRef} className="relative inline-block">
      <div
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onClick={toggleTooltip}
        className="cursor-pointer"
      >
        {children}
      </div>

      <div
        className={clsx(
          "absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 transition-all duration-200 ease-out",
          visible
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none",
        )}
      >
        <div className="w-max lg:max-w-[20rem] sm:max-w-[16rem] max-w-[14rem]  break-words rounded-xl bg-white text-gray-800 shadow-lg border border-gray-300 p-4">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold">Price On Application</p>
            <p className="text-xs leading-relaxed tracking-wide text-gray-600">
              The price for this item is currently unavailable. Please get in
              touch for more information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
