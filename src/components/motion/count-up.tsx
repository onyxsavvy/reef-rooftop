"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface CountUpProps {
  end: number;
  suffix?: string;
  className?: string;
  duration?: number;
}

export function CountUp({ end, suffix = "", className, duration = 2 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  
  const [isClient, setIsClient] = useState(false);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 60, stiffness: 100, duration: duration * 1000 });
  const [displayValue, setDisplayValue] = useState("");

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (isInView && isClient) {
      if (mediaQuery.matches) {
        motionValue.set(end);
      } else {
        motionValue.set(end);
      }
    }
  }, [isInView, end, motionValue, isClient]);

  useEffect(() => {
    if (!isClient) return;
    const unsubscribe = springValue.on("change", (latest) => {
      const hasDecimals = end % 1 !== 0;
      const formatted = hasDecimals ? latest.toFixed(1) : Math.floor(latest).toString();
      const withCommas = formatted.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      setDisplayValue(withCommas);
    });
    return unsubscribe;
  }, [springValue, end, isClient]);

  const originalValueStr = (end % 1 !== 0 ? end.toFixed(1) : end.toString()).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <span ref={ref} className={cn("inline-block", className)}>
      <span className="sr-only">{originalValueStr}{suffix}</span>
      <span aria-hidden="true">
        {isClient && displayValue !== "" ? displayValue : originalValueStr}{suffix}
      </span>
    </span>
  );
}
