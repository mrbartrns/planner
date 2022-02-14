import { useState, useEffect } from "react";

interface UseCountAnimationProps {
  // percentage of data. it can be under 100 or float number under 1
  percent: number;
  // total duration of animation (second)
  duration: number;
}

export const useCountAnimation = ({
  percent,
  duration,
}: UseCountAnimationProps) => {
  if (duration === 0) throw Error("duration can not be 0.");
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    let start = 0;
    const end = percent < 1 ? Math.floor(percent * 100) : percent;
    if (start === end) return;
    const totalMilSecDur = duration * 1000; // ms of duration
    const incrementTime = totalMilSecDur / end;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return count;
};
