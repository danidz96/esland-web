"use client";

import { useProgressiveNumber } from "@/hooks/useProgressiveNumber";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

type Props = {
  initial: number;
  final: number;
  decimals?: number;
  duration?: number;
};

export default function CountUp({ initial, final, decimals, duration }: Props) {
  const [count, setCount] = useProgressiveNumber(initial, duration, decimals);

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setCount(final);
    }
  }, [inView]);

  return <span ref={ref}>{count}</span>;
}
